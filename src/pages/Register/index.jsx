import React, { useState } from 'react'
import { Button, Modal, Checkbox, Form, Input } from 'antd'
export default function Register({
  setShowLogin,
  showRegister,
  setShowRegister,
}) {
  const showModal = () => {
    setShowRegister(true)
  }
  const handleOk = () => {
    setShowRegister(false)
  }
  const handleCancel = () => {
    setShowRegister(false)
  }
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const toLogin = () => {
    setShowRegister(false)
    setShowLogin(true)
  }
  return (
    <>
      <Modal
        title=""
        open={showRegister}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="register"
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
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your phone!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
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
              Register
            </Button>
          </Form.Item>
          <div onClick={toLogin} className="to_register">
            Already have an account?
            <span style={{ color: '#1677ff', cursor: 'pointer' }}>
              Go and log in
            </span>
          </div>
        </Form>
      </Modal>
    </>
  )
}
