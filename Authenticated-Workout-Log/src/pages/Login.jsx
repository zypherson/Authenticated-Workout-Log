import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <button
        onClick={() => loginWithRedirect()}
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        Login with Auth0
      </button>
    </div>
  );
}
