import React, { useState, useContext } from "react";
import { FirebaseContext } from "./../context/firebase";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (event) => {
    event.preventDefault();

    //firebase work here
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="Submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign Up Now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn More.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
