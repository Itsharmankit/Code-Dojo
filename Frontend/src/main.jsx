import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const redirectedPath = sessionStorage.getItem('gh-pages-redirect');
if (redirectedPath) {
  sessionStorage.removeItem('gh-pages-redirect');
  window.history.replaceState(null, '', redirectedPath);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-e540wkp2c22wma0q.us.auth0.com"
      clientId="KVzt3y4sas4eXHHjuUfTaddU60ZEO3ym"
      authorizationParams={{
        redirect_uri: window.location.origin + import.meta.env.BASE_URL + "home/",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
);
