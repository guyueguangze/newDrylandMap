import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import styles from './index.module.scss'
export default function Layout() {
  const menus = [
    {
      label: 'About',
      path: '/About',
    },
    {
      label: 'Datahub',
      path: '/Datahub',
    },
    {
      label: 'Learn',
      path: '/Learn',
    },
    {
      label: 'Community',
      path: '/Community',
    },
    {
      label: 'Engine',
      path: '/Engine',
    },
  ]
  return (
    <div className={styles.root}>
      <Header menus={menus}></Header>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            borderRadius: 3,
          },
          components: {
            Button: {
              defaultBorderColor: '#0097FF',
              defaultActiveBorderColor: '#0097FF',
              defaultBg: '#E0F2FF',
              defaultActiveBg: '#E0F2FF',
              defaultActiveColor: '0097FF',
              defaultHoverBg: '#E0F2FF',
              defaultColor: '#0097FF',
              dangerBg: '#F9E6E6',
              contentFontSize: 14,
              algorithm: true,
            },
            Table: {
              headerBg: '#F0F9FF',
              rowSelectedBg: '#fafafa',
              selectionColumnWidth: 70,
              algorithm: true,
            },
            Pagination: {
              itemActiveBg: '#0097FF',
            },
          },
        }}
      >
        <Content>
          <Outlet />
        </Content>
      </ConfigProvider>

      {/* <Footer></Footer> */}
    </div>
  )
}
