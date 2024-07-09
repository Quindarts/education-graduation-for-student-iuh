import AdminLayout from '@/layouts/AdminLayout';
import { getValueFromLocalStorage } from '@/utils/localStorage';
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRouter() {
  // return getValueFromLocalStorage('accessToken') ? <AdminLayout /> : <Navigate to='/home' />;
  return <AdminLayout />;
}

export default PrivateRouter;
