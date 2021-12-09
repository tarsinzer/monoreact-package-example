import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProductsList } from '../ProductsList/ProductsList';
import { Dashboard } from '../Dashboard/Dashboard';
import { Settings } from '../Settings/Settings';

export const ProductsRoutes: React.FC = () => (
  <Routes>
    <Route element={<ProductsList />} path='/products/products-list' />
    <Route element={<Dashboard />} path='/products/dashboard' />
    <Route element={<Settings />} path='/products/settings' />
  </Routes>
);
