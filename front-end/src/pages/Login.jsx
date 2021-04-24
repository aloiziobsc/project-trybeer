import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { verifyEmailAndPassword, handleSubmit } from '../services';
import logo from '../img/trybe.png';
import loading from '../img/loading.gif';
// import '../css/Login.css';
import InputLoginEmail from '../components/InputLoginEmail';
import InputLoginPassword from '../components/InputLoginPassword';
import ButtonLogin from '../components/ButtonLogin';


function Login() {
  const [activeBtn, setActiveBtn] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const history = useHistory();

  // useEffect(() => {
  //   const { email, password } = user;
  //   verifyEmailAndPassword(email, password, setActiveBtn);
  // }, [user]);

  return (
    <div className="login-page">
      { !user ? <img src={ loading } alt="loading" />
        : <div className="login-container">
          <img src={ logo } alt="logo" className="logo" />
          <div className="form-container">
            <h3 className="login-title">PROJECT - TRYBEER</h3>
            <span>Email</span>
            <InputLoginEmail
              user={ user }
              setActiveBtn={ setActiveBtn }
              setUser={ setUser }
            />
            {/* <input
              type="email"
              data-testid="email-input"
              className="input-form-login"
              onChange={ ({ target }) => setUser({ ...user, email: target.value }) }
            /> */}
            <span>Senha</span>
            <InputLoginPassword
              user={ user }
              setActiveBtn={ setActiveBtn }
              setUser={ setUser }
            />
            {/* <input
              type="password"
              data-testid="password-input"
              className="input-form-login"
              onChange={ ({ target }) => setUser({ ...user, password: target.value }) }
            /> */}
            <ButtonLogin
              activeBtn={ activeBtn }
              setActiveBtn={ setActiveBtn }
              user={ user }
            />
            {/* <button
              type="submit"
              disabled={ !activeBtn }
              onClick={ () => handleSubmit(history, user) }
              data-testid="signin-btn"
              className="button-form-login"
            >
              Entrar
            </button> */}
            <Link to="/register">
              <button type="button" data-testid="no-account-btn" className="link-button">
                Ainda não tenho conta
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
}

export default Login;
