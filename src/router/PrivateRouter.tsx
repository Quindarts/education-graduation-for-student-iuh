import AdminLayout from '@/layouts/AdminLayout';
import { getValueFromLocalStorage } from '@/utils/localStorage';
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRouter() {
  return getValueFromLocalStorage('refreshTokenStudent') ? <AdminLayout /> : <Navigate to='/home' />;
}

export default PrivateRouter;
