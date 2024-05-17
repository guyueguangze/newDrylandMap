import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
export default function Header({ menus }) {
  const { Header } = Layout
  const location = useLocation()
  const headerStyle = {
    height: 60,
  }
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const toLogin = () => {
    setShowRegister(false)
    setShowLogin(true)
  }
  const toRegister = () => {
    setShowLogin(false)

    setShowRegister(true)
  }
  return (
    <div className={styles.root}>
      <Header style={headerStyle}>
        <div className="header_content">
          <div className="header_content_left">
            <div className="menu_content">
              {menus?.map(({ label, path }) => (
                <Link
                  key={path}
                  style={{ color: '#000', position: 'relative' }}
                  to={path}
                >
                  <div
                    className={
                      location.pathname === path
                        ? 'path_active menu_item'
                        : 'menu_item'
                    }
                  >
                    {label}
                  </div>
                  {location.pathname === path && (
                    <CaretUpOutlined
                      style={{ position: 'absolute', bottom: -5, left: 54 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div style={{ cursor: 'pointer' }} className="header_content_right">
            <div onClick={toRegister} className="register">
              Register
            </div>
            &nbsp;&nbsp;&nbsp;
            <div onClick={toLogin} className="Login">
              Log in
            </div>
          </div>
        </div>
      </Header>
      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />
      <Register
        setShowLogin={setShowLogin}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />
    </div>
  )
}
