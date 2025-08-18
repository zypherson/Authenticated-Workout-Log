/* eslint-disable react-refresh/only-export-components */
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children, requiredRole }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) return <div>Loading...</div>;
  
    const hasRole = user?.['https://your-app.com/roles']?.includes(requiredRole);
  
    return (isAuthenticated && hasRole) 
      ? children 
      : <Navigate to="/" />;
  };
  
export default PrivateRoute;
