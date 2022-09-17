import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from "@apollo/client"
import 'App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from 'redux/store'
import client from 'services/Apollo/Client'
import Loading from 'components/partials/loading/Loading'

const Products = lazy(() => import('services/Apollo/Queries/GetProducts'))
const Cart = lazy(() => import('components/cart/Cart'))
const ProductDisplayWrapper = lazy(() => import('components/product_display/ProductDisplayWrapper'))
const ProductsWrapper = lazy(() => import('components/products/ProductsWrapper'))
const Header = lazy(() => import('components/header/Header'))

function App() {
  return (
    <div className="App container">
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Header />
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Products />} />
                  <Route path="/:category" element={<ProductsWrapper />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route exact path="/:category/:id" element={<ProductDisplayWrapper />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ApolloProvider>
        </Provider>
      </Suspense>
    </div >
  );
}

export default App;
