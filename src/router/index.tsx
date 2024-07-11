import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import DashboardTemplate from '@/page/DashBoard';
import { APP_ROUTES } from '@/utils/app-config';
import MainLayout from '@/layouts/MainLayout';
import HomeTemplate from '@/page/Home';
import AuthLayout from '@/layouts/AuthLayout';
import LoginPage from '@/page/Auth/Login';
import TopicTemplate from '@/page/Topic';
import GroupStudentTemplate from '@/page/GroupStudent';
import MyGroupStudentPage from '@/page/MyGroupStudent';
import MyTopicPage from '@/page/MyTopic';

function Routing() {
  return (
    <React.Suspense>
      <Routes>
        <Route path={APP_ROUTES.INDEX} element={<PrivateRouter />}>
          <Route index path={APP_ROUTES.DASHBOARD} element={<DashboardTemplate />} />
          <Route index path={APP_ROUTES.TOPIC.MANAGEMENT} element={<TopicTemplate />} />
          <Route index path={APP_ROUTES.TOPIC.STUDENT} element={<MyTopicPage />} />

          <Route
            index
            path={APP_ROUTES.GROUP_STUDENT.MANAGEMENT}
            element={<GroupStudentTemplate />}
          />
          <Route index path={APP_ROUTES.GROUP_STUDENT.DETAIL} element={<MyGroupStudentPage />} />
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
