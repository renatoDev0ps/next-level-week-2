import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import shutdownIcon from '../../assets/images/icons/shutdown.svg';

import './styles.css';
import api from '../../services/api';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(res => {
      const { total } = res.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <>
      <div id="page-landing">
        <div className="profile-container">
          <div className="profile-image">
            <Link to="/profile">
              <img
                src="https://avatars0.githubusercontent.com/u/53221268?s=460&u=1968b74a83262a4fe2adc98db2726393cf6eb227&v=4"
                alt="Renato Nascimento"
              />
            </Link>
            <span>Renato Nascimento</span>
          </div>
          <Link to="/">
            <div className="profile-logout">
              <img src={shutdownIcon} alt="Logout"/>
            </div>
          </Link>
        </div>
        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src={logoImg} alt="Proffy"/>
            <h2>Sua plataforma de estudos online.</h2>
          </div>

          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />

          <div className="buttons-container">
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar"/>
              Estudar
            </Link>

            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar Aulas"/>
              Dar Aulas
            </Link>
          </div>

          <span className="total-connections">
            Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
          </span>
        </div>
      </div>
    </>
  );
}

export default Landing;
