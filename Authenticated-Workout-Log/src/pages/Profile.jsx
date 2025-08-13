import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    isAuthenticated && (
      <div className="p-4">
        <img src={user.picture} alt={user.name} className="w-20 h-20 rounded-full" />
        <h2 className="text-xl">{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
