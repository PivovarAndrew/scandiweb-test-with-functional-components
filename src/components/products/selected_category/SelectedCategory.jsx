import { useSelector } from 'react-redux';
import { selectCategoryName } from 'redux/slices/CategorySlice';

function SelectedCategory () {
    const categoryName = useSelector(selectCategoryName);

    return categoryName
}

export default SelectedCategory;
