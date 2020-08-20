import React from 'react';

import './styles.css';
import Logo from '../../assets/image/logo.svg'

function Header() {
  return (
    <header>
      <div logo-div>
        <img src={Logo} alt="" />
      </div>
    </header>
  )
}

export default Header;