import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Routes from "./constants/routes";
import { Home, SignIn, Browse, SignUp } from "./pages";
import { IsUserRedirect } from "./helpers/routes";

export default function App() {
  const user = {};
  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={Routes.BROWSE}
        path={Routes.SIGN_IN}
        exact
      >
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={Routes.BROWSE}
        path={Routes.SIGN_UP}
        exact
      >
        <SignUp />
      </IsUserRedirect>
      <Route exact path={Routes.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={Routes.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
