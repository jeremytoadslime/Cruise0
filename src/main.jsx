import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the Auth0 SDK
import { Auth0Provider } from '@auth0/auth0-react';

// Load environment variables from the .env file
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

// Initialize the React root and render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Set up Auth0 context provider with required config */}
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
