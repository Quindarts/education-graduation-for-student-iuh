import { getValueFromLocalStorage } from '@/utils/localStorage';
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));

function PrivateRouter() {
  return getValueFromLocalStorage('refreshTokenStudent') ||
    getValueFromLocalStorage('accessTokenStudent') ? (
    <AdminLayout />
  ) : (
    <Navigate to='/home' />
  );
}

export default PrivateRouter;
