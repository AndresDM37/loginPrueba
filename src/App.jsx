import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";

export default function App() {
  // Estado para almacenar el usuario autenticado
  // Se obtiene del localStorage para mantener la sesión activa si ya ha iniciado sesión antes
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  // useEffect para comprobar si hay un usuario almacenado en localStorage al cargar la app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Maneja el inicio de sesión y almacena el usuario en localStorage
  const handleLogin = (email) => {
    localStorage.setItem("user", email); // Guarda el usuario en el almacenamiento local
    setUser(email); // Actualiza el estado del usuario
  };

  // Maneja el cierre de sesión y elimina el usuario del localStorage
  const handleLogout = () => {
    localStorage.removeItem("user"); // Borra el usuario del almacenamiento local
    setUser(null); // Restablece el estado del usuario a null
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-950 to-gray-950 text-white">
      {/* Si hay un usuario autenticado, muestra la pantalla de bienvenida; si no, muestra el formulario de login */}
      {user ? <Welcome user={user} onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
}
