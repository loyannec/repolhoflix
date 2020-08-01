import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/plantflixLogo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="PlantFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/register/video">
                {/* This file uses components "call site" specific property called children */}
                New Video
            </Button>
        </nav>
    );
}

export default Menu;
