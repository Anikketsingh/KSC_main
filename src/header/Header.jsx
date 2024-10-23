import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Bars from '../assets/bars.png';
import { Link as ScrollLink } from 'react-scroll'; // Alias this import
import { Link } from 'react-router-dom'; // Keep this as the router Link
import './Header.css';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const mobile = window.innerWidth <= 768;

  return (
    <div>
      {/* Notification Bar */}
      <div className="notification-bar">
        <div className="scrolling-text">
         Happiest 1st Anniversary of KSC Wellness &nbsp;&nbsp;|&nbsp;&nbsp;
         Happiest Birthday Kaushlendra Singh Chauhan &nbsp;&nbsp;|&nbsp;&nbsp;
          Stay Tuned for More Updates!
        </div>
      </div>

      {/* Header Section */}
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />

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
              alt="Menu Icon"
              style={{
                width: '1.5rem',
                height: '1.5rem',
              }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              <Link to="/" onClick={() => setMenuOpened(false)}>
                Home
              </Link>
            </li>
            <li>
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
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpened(false)}>
                About KSC
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;