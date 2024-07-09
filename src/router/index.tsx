import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import DashboardTemplate from '@/page/DashBoard';
import { APP_ROUTES } from '@/utils/app-config';
import MainLayout from '@/layouts/MainLayout';
import HomeTemplate from '@/page/Home';
import AuthLayout from '@/layouts/AuthLayout';
import LoginPage from '@/page/Auth/Login';

function Routing() {
  return (
    <React.Suspense>
      <Routes>
        <Route path={APP_ROUTES.INDEX} element={<PrivateRouter />}>
          <Route index path={APP_ROUTES.DASHBOARD} element={<DashboardTemplate />} />
        </Route>
        <Route path={APP_ROUTES.HOME} element={<MainLayout />}>
          <Route index path={APP_ROUTES.HOME} element={<HomeTemplate />} />
        </Route>
        <Route path={'/auth'} element={<AuthLayout />}>
          <Route index path={APP_ROUTES.USER.LOGIN} element={<LoginPage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default Routing;
