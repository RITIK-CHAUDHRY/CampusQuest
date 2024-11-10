import { Button, Radio, Form, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import apiClient from "../../Clients/apiClient";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const { isAuthenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div
      style={{
        justifyItems: "center",
        marginTop: "50px",
        verticalAlign: "middle",
      }}
    >
      <Form
        name="basic"
        title="Register"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          border: "1px solid #e1e1e1",
          paddingLeft: "100px",
          paddingRight: "100px",

          borderRadius: "5px",
        }}
        initialValues={{
          remember: false,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1> Register</h1>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Reg No"
          name="regno"
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setRegNo(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
            {
              message: "Please ensure the email ends with mnnit.ac.in!",
              pattern: "/^[a-zA-Z0-9._%+-]+@mnnit.ac.in$/",
            },
          ]}
        >
          <Input
            type="email"
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

        <Form.Item
          label="Role"
          name="role"
          rules={[
            {
              required: true,
              message: "Please select your role!",
            },
          ]}
        >
          <Radio.Group
            onChange={(e) => {
              setRole(e.target.value);
            }}
            value={role}
          >
            <Radio value={"student"}>Student</Radio>
            <Radio value={"teacher"}>Teacher</Radio>
          </Radio.Group>
        </Form.Item>

        {!!error && (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        )}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div style={{ display: "flex" }}>
            <Button
              style={{ border: "1px solid #e1e1e1" }}
              type="primary"
              htmlType="button"
              onClick={async (e) => {
                setError("");
                e.preventDefault();
                setLoading(true);
                if (
                  !username ||
                  !password ||
                  !firstName ||
                  !lastName ||
                  !regNo ||
                  !phone
                ) {
                  setError("Please enter all values!");
                } else {
                  try {
                    const res = await apiClient.post("/auth/register", {
                      email: username,
                      password,
                      firstName,
                      lastName,
                      regNo,
                      phone,
                    });
                    if (res.status == 200) {
                      login(res.data.user);
                      navigate("/");
                    }
                  } catch (e) {
                    setError(e.response.data.msg);
                  }
                }
              }}
            >
              Sign Up
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
