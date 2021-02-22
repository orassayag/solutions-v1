import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import translate from '../../../translate/translate';

// Components parameter and functions PropTypes validations.
const propTypes = {
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    children: PropTypes.node
};

// Components default values.
const defaultProps = {
    children: null
};

const NavigationItem = (props) => {
    // Manually validate parameters just in case.
    if (!props.link || !props.linkText) {
        throw new Error(translate.error_missing.replace('#params#', 'link or classType or linkText'));
    }

    return (
        <li className="fadeIn">
            <NavLink to={props.link} exact={props.exact}>{props.linkText}</NavLink>
        </li>
    );
};

// Set the PropTypes validations and default values.
NavigationItem.propTypes = propTypes;
NavigationItem.defaultProps = defaultProps;

export default NavigationItem;