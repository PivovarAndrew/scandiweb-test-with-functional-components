import { graphql } from '@apollo/client/react/hoc';
import { GET_CATEGORIES } from 'constants/Queries';
import CategorySwitcher from 'components/header/category_switcher/CategorySwitcher'

export default graphql(GET_CATEGORIES)(CategorySwitcher)
