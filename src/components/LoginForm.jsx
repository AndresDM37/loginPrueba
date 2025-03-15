import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError("El correo no es válido");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onLogin(email);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/20 ">
      <img
        src="/logoJTKTIC.png"
        alt="Logo"
        className="w-50"
      />
      <h2 className="text-2xl font-semibold text-white mt-4">Iniciar sesión</h2>

      <form onSubmit={handleLogin} className="space-y-4 mt-6">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-900 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:opacity-80 transition flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5"></span>
          ) : (
            "Iniciar sesión"
          )}
        </button>
      </form>
    </div>
  );
}
