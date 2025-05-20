
import React, { useState, useEffect } from "react";

const LoginPage = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    if (isAuthenticated) {
      onAuthSuccess();
    }
  }, [onAuthSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "TestGTH") {
      localStorage.setItem("auth", "true");
      onAuthSuccess();
    } else {
      setError("Nesprávné heslo.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px" }}>
      <h2>🔐 Přístup chráněn heslem</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input
          type="password"
          placeholder="Zadej heslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "10px", fontSize: "16px" }}>Přihlásit se</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
