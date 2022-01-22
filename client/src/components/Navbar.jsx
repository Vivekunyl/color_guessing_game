import React from 'react';
import {NavLink} from  'react-router-dom';
import '../style/Navbar.css';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
const Navbar = ()=>{
    return(
        <>
            <div className="Nav-Section">
                <ul className="Nav-ul">
                    <li className="container">
                        
                        <NavLink className="nav-link" to="/"><SportsEsportsIcon />Home</NavLink>
                    </li>
                </ul>
                <ul className="Nav-ul">
                    <li className="container">
                        
                        <NavLink className="nav-link" to="/Period"><MilitaryTechIcon />Period</NavLink>
                    </li>
                </ul>
                <ul className="Nav-ul">
                    <li className="container" id="container-mine">
                        
                        <NavLink className="nav-link" id="Mine-link" to="/Mine"><AccountBoxOutlinedIcon />Mine</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;