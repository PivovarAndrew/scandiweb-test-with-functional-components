import React, { useState, useEffect } from "react";
import styles from './category_switcher.module.scss'
import { Link } from "react-router-dom";
import Loading from 'components/partials/loading/Loading'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryName, switchCategory } from 'redux/slices/CategorySlice';

function CategorySwitcher({ data: { categories, loading, error } }) {
    const categoryName = useSelector(selectCategoryName)
    const dispatch = useDispatch()
    const [selectedCategory, setSelectedCategory] = useState(categoryName)

    function handleClick(name) {
        setSelectedCategory(name)
    }

    useEffect(() => {
        dispatch(switchCategory(selectedCategory));
    }, [selectedCategory]);

    if (loading || !categories) return <Loading />
    if (error) return <p>Error :{error.message}</p>;

    return categories.map(({ name }, index) => (
        <Link to={`/${name}`}
            className={classnames(styles.name,
                name === selectedCategory && styles.selected)}
            key={index}
            onClick={() => { handleClick(name) }}
        >
            {name}
        </Link>
    ));
}

export default CategorySwitcher;
