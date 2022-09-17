import React, { useRef, useState } from "react";
import styles from './currency_switcher.module.scss'
import Loading from 'components/partials/loading/Loading'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrencySymbol, switchCurrency } from 'redux/slices/CurrencySlice';
import { BsChevronDown } from "react-icons/bs";
import useOutsideClick from 'services/hooks/useOutsideClick'

function CurrencySwitcher({ data: { currencies, loading, error } }) {
    const currencySymbol = useSelector(selectCurrencySymbol)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const switcherRef = useRef()

    useOutsideClick(switcherRef, () => {
        open && setOpen(!open)
    });

    if (loading || !currencies) return <Loading />
    if (error) return <p>Error :{error.message}</p>;

    return (
        <>
            <div ref={switcherRef} className={styles.container} onClick={() => setOpen(!open)}>
                <div className={styles.symbol}>
                    {currencySymbol}
                </div>

                <div className={styles.chevron}>
                    <BsChevronDown className={open && styles.rotated}/>
                </div>

                {open &&
                    <ul>
                        {currencies.map((currency, index) => (
                            <li key={index} onClick={() => {
                                dispatch(switchCurrency(currency.symbol));
                                setOpen(!open)
                            }}
                            >
                                {currency.symbol} {currency.label}
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </>
    )
}

export default CurrencySwitcher;
