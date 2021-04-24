import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyEmailAndPassword } from '../services';

function InputLoginPassword(props) {
  const { user, setUser, setActiveBtn } = props;

  const history = useHistory();

  useEffect(() => {
    const { email, password } = user;
    verifyEmailAndPassword(email, password, setActiveBtn);
  }, [user]);

  return (
    <div>
      <input
        type="password"
        data-testid="password-input"
        className="input-form-login"
        onChange={ ({ target }) => setUser({ ...user, password: target.value }) }
      /> 
    </div>
  );
}

export default InputLoginPassword;
