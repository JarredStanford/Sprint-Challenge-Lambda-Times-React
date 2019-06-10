import React from "react";

import ContentPage from "./components/ContentPage";
import Login from "./components/Login";
import withAuthenticate from "./components/authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(ContentPage)(Login);
const App = () => {
  return <ComponentFromWithAuthenticate />;
};

export default App;
