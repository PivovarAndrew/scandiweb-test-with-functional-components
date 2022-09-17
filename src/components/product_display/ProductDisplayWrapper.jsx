import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'components/partials/loading/Loading'
import { GET_PRODUCT } from 'constants/Queries'
import { useQuery } from '@apollo/client';

const ProductDisplay = lazy(() => import('services/Apollo/Queries/GetProduct'))

const ProductDisplayWrapper = () => {
    const { id } = useParams();
    const { loading } = useQuery(GET_PRODUCT, { variables: { id: id }});

    if (loading) return <Loading />

    return <ProductDisplay id={id} />
};

export default ProductDisplayWrapper;