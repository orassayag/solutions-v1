import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBox.less';
import { generateClassName } from '../../../utils/textUtils';

// Components parameter and functions PropTypes validations.
const propTypes = {
    text: PropTypes.string,
    searchOption: PropTypes.bool.isRequired
};

// Components default values.
const defaultProps = {
    text: ''
};

const ErrorBox = (props) => {
    let containerClass = generateClassName(props.text, 'error-container', 'active');
    containerClass = generateClassName(props.searchOption, containerClass, 'advance-search');

    return (
        <div className={containerClass} aria-live="assertive" aria-hidden="false">
            <div className="error-message">{props.text}</div>
        </div>
    );
};

// Set the PropTypes validations and default values.
ErrorBox.propTypes = propTypes;
ErrorBox.defaultProps = defaultProps;

export default ErrorBox;