
export const APP_ROUTES = {
  INDEX: "/",
  DASHBOARD: '/dashboard',
  HOME: '/home',
  NOTIFICATION: {
    MANAGEMENT: "/dashboard/notifications",
    DETAILS: "/notifications/:lecturer_id",
    CREATE: "/notifications/create",
  },
  SCORE_STUDENT: {
    MANAGEMENT: "/dashboard/scores"
  },
  STUDENT: {
    MANAGEMENT: '/dashboard/students',
  },
  GROUP_STUDENT: {
    MANAGEMENT: "/dashboard/group-students",
    DETAIL: '/dashboard/group-students/detail/:group_id',
  },
  TOPIC: {
    MANAGEMENT: "/dashboard/topics",
    LECTURER: '/dashboard/topic-lecturers'
  },
  REVIEW: {
    MANAGEMENT: '/dashboard/reviews',
  },
  FILE_UPLOADED: '/dashboard/files',

  USER: {
    PROFILE: '/dashboard/profile',
    LOGIN: '/auth/login',
  },
  FORGOT_PASSWORD: '/auth/forgot-password',
  SUCCESS_MESSAGE: '/auth/success',
  NOT_FOUND: '/404',
};
export interface ItemAppSiderbarType {
  text: string,
  icon: string,
  link: string,
  key: string,
}
export interface AppSiderBarType {
  text: string,
  icon?: string,
  link: string,
  key: string,
  children?: ItemAppSiderbarType[]
}
export const APP_SIDEBAR = [
  {
    text: 'Trang chủ',
    icon: 'ic:baseline-home',
    link: APP_ROUTES.DASHBOARD,
    key: '/',
  },
  {
    icon: 'mdi:account-student',
    text: 'Nhóm sinh viên',
    link: [APP_ROUTES.STUDENT.MANAGEMENT],
    children: [
      {
        text: 'Danh sách nhóm sinh viên',
        link: APP_ROUTES.STUDENT.MANAGEMENT,
        key: APP_ROUTES.STUDENT.MANAGEMENT,
      },
      {
        text: 'Nhóm sinh viên của tôi',
        link: APP_ROUTES.STUDENT.MANAGEMENT,
        key: APP_ROUTES.STUDENT.MANAGEMENT,
      },

    ],
  },
  {
    icon: 'material-symbols:topic',
    text: 'Đề tài',
    link: [APP_ROUTES.TOPIC.MANAGEMENT],
    children: [
      {
        text: 'Danh sách đề tài',
        link: APP_ROUTES.TOPIC.MANAGEMENT,
        key: APP_ROUTES.TOPIC.MANAGEMENT,
      },
      {
        icon: 'material-symbols:topic',
        text: 'Đề tài của tôi',
        link: [APP_ROUTES.TOPIC.LECTURER],
      },
    ],
  },
  {
    icon: 'fluent-mdl2:review-solid',
    text: 'Tiêu chí Đánh giá của học kì',
    link: APP_ROUTES.REVIEW.MANAGEMENT,
    key: '/review',

  },

  {
    icon: 'healthicons:i-exam-multiple-choice',
    text: 'Bảng điểm của tôi',
    link: [APP_ROUTES.SCORE_STUDENT.MANAGEMENT],
  },

];

export const APP_PROFILE_MENU = [
  {
    text: 'Thông tin cá nhân',
    icon: 'mdi:account-circle',
    link: '/profile',
  },
  {
    text: 'Thay đổi vai trò',
    icon: 'hugeicons:user-switch',
    link: '/auth/role',
  },
  {
    text: 'Đăng xuất',
    icon: 'ri:logout-box-r-line',
    link: '/auth/login',
  },

];

export const renderType = {
  MANAGEMENT: 'MANAGEMENT',
  FILTER: 'filter',
  SEARCH: 'search',
};
