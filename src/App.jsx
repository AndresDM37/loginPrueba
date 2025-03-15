import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";

export default function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (email) => {
    localStorage.setItem("user", email);
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-950 to-gray-950 text-white">
      {user ? <Welcome user={user} onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
}
