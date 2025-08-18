import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 text-white">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold text-lg">
          Workout Log
        </Link>
        {isAuthenticated && (
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        )}
      </div>

      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            <span className="text-sm">{user?.name}</span>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-green-500 px-3 py-1 rounded hover:bg-green-700"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
