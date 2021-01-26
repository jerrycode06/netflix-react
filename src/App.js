import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as Routes from "./constants/routes";
import { Home, SignIn, Browse, SignUp } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

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
      <ProtectedRoute user={user} path={Routes.BROWSE} exact>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={Routes.BROWSE}
        path={Routes.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
