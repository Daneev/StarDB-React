import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-end">
    <div>
        <h1>StarDB</h1>
    </div>
    <ul className="nav nav-tabs">
        <li className="nav-item"><span className="nav-link active">People</span></li>
        <li className="nav-item"><span className="nav-link">Planets</span></li>
        <li className="nav-item"><span className="nav-link">Starships</span></li>
    </ul>
  </header>
  )
}