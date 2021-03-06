import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Proudly created with love and care during by
        {' '}
        <a href="https://www.linkedin.com/in/loyannec/">
          Loyanne Cristine
        </a>
        {' '}
        ♥
        {' '}
        <a href="https://www.alura.com.br/">
          Alura's React Immersion
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
