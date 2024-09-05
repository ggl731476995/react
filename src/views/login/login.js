import React,{useState} from "react";
import "./Login.scss";
import { Button, Form, Input,message } from "antd";
import { useNavigate } from "react-router-dom";
import useToken from "antd/es/theme/useToken";

export default function login() {
  const [value, setMessage] = useState('');
  const [pas, sePas] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = () => {};
  const onFinishFailed = () => { };
  let navigate = useNavigate();  // 导航跳转
  const submit = () => {
    if (value === 'admin' && pas !== '') {
      sessionStorage.setItem('loginToken','admin');
      message.success('登陆成功！');
      navigate('/home')
    } else {
      message.error('账号或密码有误！');
    }
  }
  return (
    <div className="Login">
      <div className="loginBox">
        <h2>React管理系统</h2>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={<label style={{ color: "white" }}>账号 </label>}
            name="userName"
            rules={[
              {
                required: true,
                message: "请输入账号!",
              },
            ]}
          >
            <Input value={value} onChange={(e) => setMessage(e.target.value)} />
          </Form.Item>

          <Form.Item
            label={<label style={{ color: "white" }}>密码</label>}
            name="passWord"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password value={pas} onChange={(e) => sePas(e.target.value)} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
            <Button type="primary" htmlType="submit" onClick={submit}>
              登陆
            </Button>
            <Button htmlType="cancal" style={{ marginLeft: "50px" }}>
              取消
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
