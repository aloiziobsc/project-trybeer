import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { handleSubmit } from '../services';

function ButtonLogin(props) {
  const { activeBtn, user } = props;

  const history = useHistory();

  useEffect(() => {
  }, [activeBtn]);

  return (
    <div>
      <button
        type="submit"
        disabled={ !activeBtn }
        onClick={ () => handleSubmit(history, user) }
        data-testid="signin-btn"
        className="button-form-login"
      >
        Entrar
      </button>
    </div>
  );
}

export default ButtonLogin;
