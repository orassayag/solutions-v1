import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.less';
import logo from '../../../assets/img/logo.jpg';
import translate from '../../../translate/translate';
import { NavigationItem } from '../';

// Components parameter and functions PropTypes validations.
const propTypes = {
    userName: PropTypes.string
};

// Components default values.
const defaultProps = {
    userName: null
};

const Header = (props) => {
    const headerData = {
        userName: null,
        burgerMenu: [...Array(3)].map((ctrl, i) => <span key={i} className="icon-bar"></span>)
    };

    return (
        <nav className="navbar navbar-default">
            <div className="container">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                    <label htmlFor="toggle" className="navbar-toggle collapsed">
                        <span className="sr-only">{translate.header_mobile_menu_title}</span>
                        {headerData.burgerMenu}
                    </label>
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt={translate.header_logo_alt_title} title={translate.header_logo_alt_title} />
                    </NavLink>
                </div>
                {/* Collect the nav links */}
                <input id="toggle" type="checkbox" name="toggle" />
                <div className="sub-menu">
                    <ul className="main-nav nav navbar-nav navbar-right">
                        <NavigationItem link="/" linkText={translate.header_home_label} exact />
                        <NavigationItem link="/auth" linkText={translate.header_authentication_label} exact />
                        {headerData.userName}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Set the PropTypes validators and default values.
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;