import React, { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function RecoveryPassword() {
  const [email, setEmail] = useState('');

  return (
    <>
      <div id="page-recovery">
        <div id="page-recovery-aside">
          <div className="back-to">
            <Link to="/" >
              <img src={backIcon} alt="Voltar"/>
            </Link>
          </div>
          <form onSubmit={() => {}}>
            <legend>Eita, esqueceu sua senha?</legend>
            <p>Não esquenta vamos dar um jeito nisso.</p>
            <fieldset>
              <Input
                className="input-normal"
                name="email"
                type="email"
                label="E-mail"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </fieldset>
            <Button className="button-success" type="submit" name="Enviar" />
          </form>
        </div>
        <div id="page-recovery-side">
          <div className="logo-container">
            <img src={logoImg} alt="Proffy"/>
            <p>Sua plataforma de estudos online.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecoveryPassword;
