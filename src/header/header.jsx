import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "./header.scss"

const Header = () => {
    return <nav className="containerHeader">
            <Link to="/"><Button variant="contained" className="headerBtn">Main</Button></Link>
            <Link to="/todo"><Button variant="contained" className="headerBtn">ToDo</Button></Link>
            <Link to="/swapi"><Button variant="contained" className="headerBtn">SWAPI</Button></Link>
    </nav>
}

export default Header;
