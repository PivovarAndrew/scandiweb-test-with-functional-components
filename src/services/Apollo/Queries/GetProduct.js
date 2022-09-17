import { graphql } from '@apollo/client/react/hoc';
import { GET_PRODUCT } from 'constants/Queries';
import ProductDisplay from 'components/product_display/ProductDisplay'

export default graphql(
    GET_PRODUCT, {
    skip: ownProps => !!ownProps.skip,
    options: (ownProps) => ({
        variables: { id: ownProps.id },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
    })
})(ProductDisplay)
