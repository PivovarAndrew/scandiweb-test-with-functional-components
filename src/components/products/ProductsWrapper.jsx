import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'components/partials/loading/Loading'
import { GET_PRODUCTS } from 'constants/Queries'
import { useQuery } from '@apollo/client';

const Products = lazy(() => import('services/Apollo/Queries/GetProducts'))

const ProductsWrapper = () => {
    const { category } = useParams();
    const { loading } = useQuery(GET_PRODUCTS, { variables: { category: category }});

    if (loading) return <Loading />

    return <Products category={category} />
};

export default ProductsWrapper;
