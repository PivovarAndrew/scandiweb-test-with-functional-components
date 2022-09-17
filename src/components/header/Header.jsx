import React from 'react';
import styles from './header.module.scss'
import { Link } from "react-router-dom";
import ShoppingCart from './shopping_cart/ShoppingCart';
import CategorySwitcher from 'services/Apollo/Queries/GetCategories';
import CurrencySwitcher from 'services/Apollo/Queries/GetCurrencies';
import logo from 'logo.svg'
import { Toaster, useToaster } from 'react-hot-toast';

const Header = () => {
  const { handlers } = useToaster();
  const { startPause, endPause } = handlers;
  
  return (
    <div className={styles.container}>
      <div className={styles.categorySwitcher}>
        <CategorySwitcher />
      </div>

      <div className={styles.headerLogo}>
        <Link exact="true" to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={styles.shoppingComponents}>
        <CurrencySwitcher />
        <ShoppingCart />
      </div>

      <Toaster
        onMouseEnter={startPause}
        onMouseLeave={endPause}
        position="bottom-left"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 1000,
        }}
      />
    </div>
  );
}

export default Header;
