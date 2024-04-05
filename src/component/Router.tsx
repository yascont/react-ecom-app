import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';
import CategoryPage from '../pages/CategoryPage';
import { BrowserRouter } from 'react-router-dom';


function Router() {
    return (
            <Routes>
                    <Route path="/"
                            element={<Navigate to="/home" replace />}/>
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/product/:id" element={<ProductPage/>} />
                    <Route path="/category/:category" element={<CategoryPage/>} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/404" element={<NotFoundPage/>} />
                    <Route path="*" element={<NotFoundPage/>} />
            </Routes>
    );
}

export default Router;