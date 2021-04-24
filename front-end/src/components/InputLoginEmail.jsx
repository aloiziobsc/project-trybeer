import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyEmailAndPassword } from '../services';

function InputLoginEmail(props) {
  const { user, setUser, setActiveBtn } = props;

  const history = useHistory();

  useEffect(() => {
    const { email, password } = user;
    verifyEmailAndPassword(email, password, setActiveBtn);
  }, [user]);

  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        className="input-form-login"
        onChange={ ({ target }) => setUser({ ...user, email: target.value }) }
      /> 
    </div>
  );
}

export default InputLoginEmail;
