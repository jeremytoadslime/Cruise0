import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
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
      <img
        src="/Cruise0-Logo.png"
        alt="Cruise0 Logo"
        style={{ width: '400px', marginBottom: '1.5rem' }}
      />

      {error && <p style={{ color: 'red' }}>{error.message}</p>}

      {!isAuthenticated ? (
   <>
    <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#2f4b7c' }}>
      Welcome to Cruise0. Please log in to continue.
    </p>
    <button onClick={() => loginWithRedirect()}>Log In</button>
  </>
      ) : (
        <>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#2f4b7c',
          }}>
          Welcome, {user.name}
          </p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </>
      )}
    </div>
  );
}

export default App;
