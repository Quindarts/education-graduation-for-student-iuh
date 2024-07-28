import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import { APP_ROUTES } from '@/utils/app-config';
import MainLayout from '@/layouts/MainLayout';
import HomeTemplate from '@/page/Home';
import AuthLayout from '@/layouts/AuthLayout';
import LoginPage from '@/page/Auth/Login';
import NotficationDetailPage from '@/page/NotificationDetail';

const DashboardTemplate = lazy(() => import('@/page/DashBoard'));
const TopicTemplate = lazy(() => import('@/page/Topic'));
const GroupStudentTemplate = lazy(() => import('@/page/GroupStudent'));
const ScoreManagementTemplate = lazy(() => import('@/page/ScoreManagement'));
const MyGroupStudentPage = lazy(() => import('@/page/MyGroupStudent'));
const MyTopicPage = lazy(() => import('@/page/MyTopic'));
const TopicDetailPage = lazy(() => import('@/page/TopicDetail'));
const ProfilePage = lazy(() => import('@/page/Auth/Profile'));
const EvaluationPage = lazy(() => import('@/page/Evaluation/Management'));
const UpdatePassPage = lazy(() => import('@/page/Auth/UpdatePassword'));
function Routing() {
  return (
    <Routes>
      <Route path={APP_ROUTES.INDEX} element={<PrivateRouter />}>
        <Route index path={APP_ROUTES.DASHBOARD} element={<DashboardTemplate />} />
        <Route path={APP_ROUTES.TOPIC.MANAGEMENT} element={<TopicTemplate />} />
        <Route path={APP_ROUTES.TOPIC.STUDENT} element={<MyTopicPage />} />
        <Route path={APP_ROUTES.TOPIC.DETAIL} element={<TopicDetailPage />} />
        <Route path={APP_ROUTES.GROUP_STUDENT.MANAGEMENT} element={<GroupStudentTemplate />} />
        <Route path={APP_ROUTES.GROUP_STUDENT.DETAIL} element={<MyGroupStudentPage />} />
        <Route path={APP_ROUTES.USER.PROFILE} element={<ProfilePage />} />
        <Route path={APP_ROUTES.USER.UPDATE_PASS} element={<UpdatePassPage />} />   

        <Route path={APP_ROUTES.EVALUATION.MANAGEMENT} element={<EvaluationPage />} />
        <Route path={APP_ROUTES.SCORE_STUDENT.MANAGEMENT} element={<ScoreManagementTemplate />} />

        <Route path={APP_ROUTES.NOTIFICATION.DETAILS} element={<NotficationDetailPage />} />
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
