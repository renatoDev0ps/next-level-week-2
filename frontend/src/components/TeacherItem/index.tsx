import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <>
      <article className="teacher-item">
        <header>
          <img src="https://avatars0.githubusercontent.com/u/53221268?s=460&u=1968b74a83262a4fe2adc98db2726393cf6eb227&v=4" alt="Renato Nascimento"/>
          <div>
            <strong>Renato Nascimento</strong>
            <span>Devops</span>
          </div>
        </header>

        <p>
        I'm graduated in System Analyst and passionate to DevOps. 
        <br/><br/>
        I have been working on developing web systems and infrastructure as code.
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </button>
        </footer>
      </article>
    </>
  );
}

export default TeacherItem;