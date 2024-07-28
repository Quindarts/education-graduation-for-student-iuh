import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import { APP_ROUTES } from '@/utils/app-config';
import MainLayout from '@/layouts/MainLayout';
import HomeTemplate from '@/page/Home';
import AuthLayout from '@/layouts/AuthLayout';
import LoginPage from '@/page/Auth/Login';
import UpdatePassword from '@/page/Auth/UpdatePassword';
import NotficationDetailPage from '@/page/NotificationDetail';

const DashboardTemplate = lazy(() => import('@/page/DashBoard'));
const TopicTemplate = lazy(() => import('@/page/Topic'));
const GroupStudentTemplate = lazy(() => import('@/page/GroupStudent'));
const MyGroupStudentPage = lazy(() => import('@/page/MyGroupStudent'));
const MyTopicPage = lazy(() => import('@/page/MyTopic'));
const TopicDetailPage = lazy(() => import('@/page/TopicDetail'));
const ProfilePage = lazy(() => import('@/page/Auth/Profile'));
function Routing() {
  return (
    <Routes>
      <Route path={APP_ROUTES.INDEX} element={<PrivateRouter />}>
        <Route index path={APP_ROUTES.DASHBOARD} element={<DashboardTemplate />} />
        <Route index path={APP_ROUTES.TOPIC.MANAGEMENT} element={<TopicTemplate />} />
        <Route index path={APP_ROUTES.TOPIC.STUDENT} element={<MyTopicPage />} />
        <Route index path={APP_ROUTES.TOPIC.DETAIL} element={<TopicDetailPage />} />
        <Route
          index
          path={APP_ROUTES.GROUP_STUDENT.MANAGEMENT}
          element={<GroupStudentTemplate />}
        />
        <Route index path={APP_ROUTES.GROUP_STUDENT.DETAIL} element={<MyGroupStudentPage />} />
        <Route index path={APP_ROUTES.USER.PROFILE} element={<ProfilePage />} />
        <Route index path={APP_ROUTES.USER.UPDATE_PASS} element={<UpdatePassword />} />

        <Route index path={APP_ROUTES.NOTIFICATION.DETAILS} element={<NotficationDetailPage />} />
      </Route>
      <Route path={APP_ROUTES.HOME} element={<MainLayout />}>
        <Route index path={APP_ROUTES.HOME} element={<HomeTemplate />} />
      </Route>
      <Route path={'/auth'} element={<AuthLayout />}>
        <Route index path={APP_ROUTES.USER.LOGIN} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
