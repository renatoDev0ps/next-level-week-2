import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    api.post('sessions', {
      email,
      password
    }).then(() => {
      history.push('/home');
    }).catch(() => {
      alert('Ivalid credencials.')
    });

    console.log({ email, password });
  }

  return (
    <>
      <div id="page-login">
        <div id="page-login-side">
          <div className="logo-container">
            <img src={logoImg} alt="Proffy"/>
            <p>Sua plataforma de estudos online.</p>
          </div>
        </div>
        <div id="page-login-aside">
          <form onSubmit={handleLogin}>
            <legend>Fazer login</legend>
            <fieldset>
              <Input
                className="input-top"
                name="email"
                type="email"
                label="E-mail"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <Input
                className="input-bottom"
                name="password"
                type="password"
                label="Senha"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </fieldset>
            <div id="page-login-footer">
              <footer>
                <div className="group-checkbox">
                  <div className="input-checkbox">
                    <input type="checkbox" name="checkbox-input" />
                    <p>Lembrar-me</p>
                  </div>
                  <div className="link-checkbox">
                    <Link to="/recovery">Esquecei minha senha</Link>
                  </div>
                </div>
              </footer>
            </div>
            <Button className="button-success" type="submit" name="Entrar" />
          </form>
          <div className="go-register-content">
            <div className="go-register-account">
              <p>Não tem conta?</p>
              <Link to="/register">Cadastre-se</Link>
            </div>
            <div className="go-register-heart">
              <p>É de graça</p>
              <img src={heartIcon} alt="Coração"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
