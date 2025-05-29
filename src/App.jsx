import React from 'react';
import './App.css';

// Import the useAuth0 hook
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  /*  Destructure the necessary properties from useAuth0
      This hook provides authentication methods and state
      such as login, logout, user information, and authentication status
      It also handles loading and error states 
  */
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    error,
    isLoading,
  } = useAuth0();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      paddingTop: '4rem',
      textAlign: 'center',
    }}>

      {/* Add the Cruise0 logo */}
      <img
        src="/Cruise0-Logo.png"
        alt="Cruise0 Logo"
        style={{ width: '400px', marginBottom: '1.5rem' }}
      />

      {/* Display error message if present */}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}

      {!isAuthenticated ? (
        
   <>
   {/* If the user is not authenticated, show a login prompt */}
    <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#2f4b7c' }}>
      Welcome to Cruise0. Please log in to continue.
    </p>

    {/* Redirects user to Auth0 Universal Login */}
    <button onClick={() => loginWithRedirect()}>Log In</button>
  </>
      ) : (
        <>
         {/* If authenticated, greet the user and show a logout button  */}
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#2f4b7c',
          }}>
          
          {/* Displays name from the ID token */}
          Welcome, {user.name}
          </p>
          {/* Logs out and return to homepage */}
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </>
      )}
    </div>
  );
}

export default App;
