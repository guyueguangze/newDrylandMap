import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import About from '@/pages/About'
import LazyLoad from './utils/LazyLoad'
import Layout from '@/pages/Layout'

export const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/about" />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/About',
        element: <About />,
        meta: {
          requiresAuth: true,
          title: 'About',
          key: 'About',
        },
      },
      {
        path: '/Community',
        element: LazyLoad(React.lazy(() => import('@/pages/Community'))),
        meta: {
          requiresAuth: true,
          title: 'Community',
          key: 'Community',
        },
      },
      {
        path: '/Datahub',
        element: LazyLoad(React.lazy(() => import('@/pages/Datahub'))),
        meta: {
          requiresAuth: true,
          title: 'Datahub',
          key: 'Datahub',
        },
      },
      {
        path: '/Engine',
        element: LazyLoad(React.lazy(() => import('@/pages/Engine'))),
        meta: {
          requiresAuth: true,
          title: 'Engine',
          key: 'Engine',
        },
      },
      {
        path: '/Learn',
        element: LazyLoad(React.lazy(() => import('@/pages/Learn'))),
        meta: {
          requiresAuth: true,
          title: 'Learn',
          key: 'Learn',
        },
      },
    ],
  },
]
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}
export default Router
