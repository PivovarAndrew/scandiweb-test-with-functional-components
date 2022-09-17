import { graphql } from '@apollo/client/react/hoc';
import { GET_PRODUCTS } from 'constants/Queries';
import Products from 'components/products/Products'

export default graphql(GET_PRODUCTS, {
    skip: ownProps => !!ownProps.skip,
    options: (ownProps) => ({
        variables: { category: ownProps.category },
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    })
})(Products)

