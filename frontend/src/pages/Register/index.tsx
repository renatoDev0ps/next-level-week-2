import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';
import api from '../../services/api';

function Register() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateUser(e: FormEvent) {
    e.preventDefault();

    api.post('/users', {
      name,
      surname,
      email,
      password
    }).then(() => {
      history.push('/');
    }).catch(() => {
      alert('Error ao tentar cadastrar.');
    })
  }

  return (
    <>
      <div id="page-register">
        <div id="page-register-aside">
          <div className="back-to">
            <Link to="/" >
              <img src={backIcon} alt="Voltar"/>
            </Link>
          </div>
          <form onSubmit={handleCreateUser}>
            <legend>Cadastro</legend>
            <p>Preencha os dados abaixo para começar.</p>
            <fieldset>
              <Input
                className="input-top"
                name="name"
                type="text"
                label="Nome"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
              <Input
                className="input-middle"
                name="surname"
                type="text"
                label="Sobrenome"
                value={surname}
                onChange={(e) => { setSurname(e.target.value) }}
              />
              <Input
                className="input-middle"
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
            <Button className="button-success" type="submit" name="Concluir cadastro" />
          </form>
        </div>
        <div id="page-register-side">
          <div className="logo-container">
            <img src={logoImg} alt="Proffy"/>
            <p>Sua plataforma de estudos online.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
