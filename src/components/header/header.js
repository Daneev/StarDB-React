import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-end">
    <div>
        <h1><Link to="/">StarDB</Link></h1>
    </div>
    <ul className="nav nav-tabs">
        <li className="nav-item"><span className="nav-link active"><Link to="/people">People</Link></span></li>
        <li className="nav-item"><span className="nav-link"><Link to="/planets">Planets</Link></span></li>
        <li className="nav-item"><span className="nav-link"><Link to="/starships">Starships</Link></span></li>
    </ul>
  </header>
  )
}