import React, { useContext } from 'react';
import { authenticationContext } from '../../Context/Authentication';
import './AuthManager.css';

const AuthManager = () => {
  const { authenticated, logIn, logOut } = useContext(authenticationContext);


  const login = () => {
    logIn();
    console.log('logIn');
    console.log('authenticated', authenticated);
  };

  const logout = () => {
    console.log('logout');
    console.log('authenticated', authenticated);

    logOut();
  };

  return (
    <div className="auth-wrapper">
      {authenticated ? (
        <button onClick={logout}>Log out</button>
      ) : (
          <button onClick={login}>Log in</button>
        )}

      <div className="auth-status">
        Status: <b>{authenticated ? 'Logged IN' : 'Logged OUT'}</b>
      </div>
    </div>
  );
};

export default AuthManager;
