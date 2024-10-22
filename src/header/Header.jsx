import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Bars from '../assets/bars.png';
import { Link as ScrollLink } from 'react-scroll';  // Alias this import
import { Link } from 'react-router-dom';  // Keep this as the router Link
import './Header.css';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{
              width: '1.5rem',
              height: '1.5rem',
            }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            {/* Use react-router-dom Link for navigation */}
            <Link to="/" onClick={() => setMenuOpened(false)}>
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            {/* Use react-scroll Link for smooth scrolling */}
            <ScrollLink
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Why us
            </ScrollLink>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setMenuOpened(false)}>
              Gallery
            </Link>
          </li>
          <li>
          <Link to="/about" onClick={() => setMenuOpened(false)}>
              Owner
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;