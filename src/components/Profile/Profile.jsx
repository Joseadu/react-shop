import React from 'react';
import './profile.css';

export default function Profile() {
  return (
    <div id="desktopMenu" className="desktop-menu">
        <ul>
          <li>
            <a href="/" className="title">My order</a>
          </li>
    
          <li>
            <a href="/">My account</a>
          </li>
          
          <li>
            <a href="/">Add product</a>
          </li>
    
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>
  )
}
