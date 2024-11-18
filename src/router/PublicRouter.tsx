import AuthLayout from '@/layouts/AuthLayout';
import { getValueFromLocalStorage } from '@/utils/localStorage';
import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRouter() {
  return !getValueFromLocalStorage('refreshTokenStudent') ? <AuthLayout /> : <Navigate to='/' />;
}

export default PublicRouter;
