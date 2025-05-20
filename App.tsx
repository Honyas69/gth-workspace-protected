
import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    if (isAuthenticated) {
      setAuthenticated(true);
    }
  }, []);

  if (!authenticated) {
    return <LoginPage onAuthSuccess={() => setAuthenticated(true)} />;
  }

  return <h1 style={{ textAlign: "center", marginTop: "100px" }}>🎉 Přihlášeno! Vítej v aplikaci GTH Workspace.</h1>;
};

export default App;
