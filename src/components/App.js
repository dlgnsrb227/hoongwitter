import React, { useState } from "react";
import APPRouter from "components/Router";
import { authService } from "fbase";

function App() {
  console.log(authService.currentUser);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <APPRouter isLoggedIn={isLoggedIn} />;
}

export default App;
