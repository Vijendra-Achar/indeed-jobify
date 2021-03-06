import { SignupWrapper } from "./../../styles/Signup/SignupWrapper";
import { Button, Form, Input, DatePicker } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailValidation, validatePassword } from "./../../utils/validationUtil";
import IndeedLogo from "./../../assets/logo-icons/Indeed_logo_full.svg";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [dob, setDob] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigator = useNavigate();

  const handleInput = (fieldName, event) => {
    const value = event.target.value;

    switch (fieldName) {
      case "username":
        setUserName(value);
        break;

      case "email":
        setUserEmail(value);
        break;

      case "dob":
        setDob(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const validateConfimPassword = async (_, value) => {
    if (value?.length && value === password) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  };

  return (
    <SignupWrapper>
      <div className="login-box-container">
        <div className="login-logo-container">
          <img className="login-logo" src={IndeedLogo} alt="logo" />
        </div>

        <p className="login-text">Create a new account!</p>

        <Form name="basic" layout="vertical">
          {/* Username */}
          <Form.Item
            label="Name"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input onChange={(e) => handleInput("username", e)} />
          </Form.Item>

          {/* For Email address */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                validator: emailValidation,
              },
            ]}
            hasFeedback
          >
            <Input onChange={(e) => handleInput("email", e)} />
          </Form.Item>

          {/* For Date of birth */}
          <Form.Item
            label="Date of birth"
            name="dob"
            rules={[
              {
                required: true,
                message: "Please enter your date of birth!",
              },
            ]}
          >
            <DatePicker
              onChange={(e) => handleInput("dob", e)}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          {/* For password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                validator: validatePassword,
              },
            ]}
            hasFeedback
          >
            <Input.Password onChange={(e) => handleInput("password", e)} />
          </Form.Item>

          {/* For password confirmation */}
          <Form.Item
            label="Password Confirm"
            name="password-confirm"
            rules={[
              {
                required: true,
                message: "Please re-type your password!",
              },
              {
                validator: validateConfimPassword,
              },
            ]}
            hasFeedback
          >
            <Input.Password onChange={(e) => handleInput("confirmPassword", e)} />
          </Form.Item>

          {/* Submit button */}
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <p className="signup-message" onClick={() => navigator("/login")}>
          Already have an account?<Button type="link">Login</Button>
        </p>
      </div>
    </SignupWrapper>
  );
};

export default Login;
