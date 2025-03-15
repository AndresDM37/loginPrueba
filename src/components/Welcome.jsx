export default function Welcome({ user, onLogout }) {
    return (
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-sm text-center border border-white/20">
        <h2 className="text-2xl font-bold text-white">Bienvenido, {user} 🎉</h2>
        <button
          onClick={onLogout}
          className="mt-6 w-full bg-red-500 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition"
        >
          Cerrar sesión
        </button>
      </div>
    );
  }
  