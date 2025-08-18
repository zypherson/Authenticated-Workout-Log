import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

const domain =  "dev-zue7rm3akv160ugb.us.auth0.com"
const clientId = 'lEyCePyNX0LAdk8EeZG9cT4hXZeYRDMj'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
)
