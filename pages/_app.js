// File - /pages/_app.js
import { createMemoryHistory } from "history";
import { useState } from 'react';
import '../assets/app.scss';
import { AppContext } from "../context/context";
import Home from '../pages/index';
function LoginUI({ Component, pageProps }) {
  const history = createMemoryHistory();
  const [authenticatedName, userHasAuthenticated] = useState(null);
  return (
    <AppContext.Provider value={{ authenticatedName, userHasAuthenticated }}>
      {authenticatedName == null ? <Home /> :
        <Component {...pageProps} />}∏
    </AppContext.Provider>
  )
}

export default LoginUI
