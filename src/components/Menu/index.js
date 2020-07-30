import React from 'react';
import Logo from '../../assets/img/repolhoflixLogo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="RepolhoFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                {/* This file uses components "call site" specific property called children */}
                New Video
            </Button>
        </nav>
    );
}

export default Menu;
