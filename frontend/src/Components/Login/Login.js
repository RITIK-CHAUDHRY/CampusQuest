import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../Clients/apiClient";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { isAuthenticated, login } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  });

  return (
    <div
      style={{
        justifyItems: "center",
        marginTop: "60px",
        verticalAlign: "middle",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          border: "1px solid #e1e1e1",
          padding: "100px",
          borderRadius: "5px",
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1> Login</h1>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Item>
        {!!error && (
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            {<p style={{ color: "red" }}>{error}</p>}
          </Form.Item>
        )}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div style={{ display: "flex" }}>
            <Button
              tabIndex={0}
              style={{ marginRight: "10px" }}
              type="primary"
              htmlType="submit"
              onClick={async (e) => {
                e.preventDefault();
                try {
                  const res = await axios.post(
                    "http://localhost:5000/api/v1/auth/login",
                    {
                      email: username,
                      password,
                    }
                  );
                  if (res.status == 200) {
                    login(res.data.user);
                    navigate("/dashboard");
                  }
                } catch (e) {
                  setError("Username/password is incorrect!");
                }
              }}
            >
              Login
            </Button>
            <Link to={"/register"}>
              <Button
                style={{ border: "1px solid #e1e1e1" }}
                type="secondary"
                htmlType="button"
                onClick={(e) => {}}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
