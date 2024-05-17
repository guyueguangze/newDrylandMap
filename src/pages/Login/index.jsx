import React, { useState } from 'react'
import { Button, Modal, Checkbox, Form, Input } from 'antd'
export default function Login({ showLogin, setShowLogin, setShowRegister }) {
  const showModal = () => {
    setShowLogin(true)
  }
  const handleOk = () => {
    setShowLogin(false)
  }
  const handleCancel = () => {
    setShowLogin(false)
  }
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const toRegister = () => {
    setShowLogin(false)

    setShowRegister(true)
  }
  return (
    <>
      <Modal
        open={showLogin}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="login"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          style={{
            // height: 500,
            maxWidth: 600,
            padding: 30,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 24,
            }}
          >
            <Button style={{ width: '100%' }} type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
          <div onClick={toRegister} className="to_register">
            No account?
            <span style={{ color: '#1677ff', cursor: 'pointer' }}>
              Go to Register
            </span>
          </div>
        </Form>
      </Modal>
    </>
  )
}
