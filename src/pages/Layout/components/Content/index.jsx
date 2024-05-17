import React from 'react'
import { Layout } from 'antd'

export default function Content({ children }) {
  const { Content } = Layout
  const contentStyle = {
    // minHeight: '800px',
    height: '100%',
    // padding: '30px 25px 30px 25px',
    // backgroundColor: '#EFF2F5',
  }
  return <Content style={contentStyle}>{children}</Content>
}
