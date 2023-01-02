import React, { useState, useContext, useRef } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { Alert } from "react-bootstrap";
import axios from "axios";
import "../styles/Login.css";

function LoginPage() {
  //   const emailRef = useRef();
  //   const passwordRef = useRef();
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);
  //   const { login } = useAuth();

  /**
   * Attempts to login with given credentials
   */
  //   const onSubmit = async (e) => {
  //     e.preventDefault();
  //     const setUser = props.setUser;
  //     const email = emailRef.current.value;
  //     const payload = {
  //       userEmail: email,
  //     };

  //     try {
  //       setError("");
  //       setLoading(true);
  //       const errorCode = await login(email, passwordRef.current.value);
  //       if (errorCode) {
  //         setLoading(false);
  //         //setError(handleLoginError(errorCode));
  //         // emitWrongParamsNotification(handleLoginError(errorCode));
  //         return;
  //       }

  //       // Get User Data
  //       await axios
  //         .post(process.env.REACT_APP_LOGIN_URL, payload)
  //         .then(function (response) {
  //           if (response.status === 200) {
  //             const user = {
  //               id: response.data.user_id,
  //               name: `${response.data.first_name} ${response.data.last_name}`,
  //               email: response.data.email,
  //               FPP: response.data.FPP,
  //             };
  //             if (response.data.FPP != 0) {
  //               emitSuccessNotification(notifications.login.success);
  //             }
  //             setUser(user);
  //           } else {
  //             handleConnectionError(response);
  //           }
  //         })
  //         .catch((err) => handleConnectionError(err));
  //     } catch {
  //       //setError("Failed to log in");
  //       handleConnectionError(notifications.connection.failure);
  //     }
  //   };

  return (
    <div className="w-75">
      <Row className="m-1">
        <h1>Encryption Login</h1>
      </Row>
      <br />
      {
        //   error &&
        // <Alert className="loginError" variant="danger">
        //   {error}
        // </Alert>
      }
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <label>Email</label>
          <input
            className="form-control"
            // ref={emailRef}
            type="email"
            placeholder="example@gmail.com"
            id="login-email"
            name="email"
            required
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <label>Password</label>
          <input
            className="form-control"
            // ref={passwordRef}
            type="password"
            placeholder="********"
            id="login-pass"
            name="password"
            required
          />
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12} xs={12} className="p-1">
          <br />
          <Button
            variant="success"
            // onClick={onSubmit}
            style={{
              backgroundColor: "#800000",
              color: "white",
              border: "none",
              marginRight: "10px",
            }}
          >
            Log in
          </Button>
        </Col>
        <Col>
          <br />
          <p style={{ fontSize: "1rem" }}>
            Don't have an account?&nbsp;
            <a target="_blank" href="https://payment-sys-demo.web.app/signup">
              Sign Up
            </a>
          </p>
          {/* <a target="_blank" href="https://cycloud.uwaterloo.ca:2010/portal/registration">Sign Up</a></p> */}
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
