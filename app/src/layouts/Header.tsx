import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
  const { pathname } = useLocation();

  return (
    <header className={`app-header`}>
      <span className={`app-header-logo`}>
        <Link to="/"></Link>
      </span>
      <ul className={`app-main-nav`}>
        <li className={pathname === '/' ? 'active' : null}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === '/projects' ? 'active' : null}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={pathname === '/activities' ? 'active' : null}>
          <Link to="/activities">Activities</Link>
        </li>
        <li className={pathname === '/timesheet' ? 'active' : null}>
          <Link to="/timesheet">Timesheets</Link>
        </li>
      </ul>
      <ul className={`app-main-menu`}>
      </ul>
    </header>
  );
};

Header.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
Header.defaultProps = {
  match: {},
  location: {},
  history: {},
};

export default Header;
