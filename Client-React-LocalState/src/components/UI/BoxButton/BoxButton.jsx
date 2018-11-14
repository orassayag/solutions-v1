import React from 'react';
import PropTypes from 'prop-types';
import './BoxButton.less';
import { validateButtonType } from '../../../utils/validationUtils';
import translate from '../../../translate/translate';

// Components parameter and functions PropTypes validations.
const propTypes = {
    buttonType: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    classType: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

// Components default values.
const defaultProps = {
    onClick: null
};

const BoxButton = (props) => {
    // Manually validate parameters just in case.
    if (!props.buttonType || !props.classType || !props.iconType || !props.buttonTitle) {
        throw new Error(translate.error_missing.replace('#params#', 'buttonType or classType or iconType or buttonTitle'));
    }

    // Validate that the type of the button is not invalid.
    if (!validateButtonType(props.buttonType)) {
        throw new Error(translate.error_invalid.replace('#params#', 'buttonType'));
    }

    return (
        <button type={props.buttonType} className={`btn ${props.classType}-btn`} onClick={props.onClick} title={props.buttonTitle}>
            <i className={`fa fa-${props.iconType}`} title={props.buttonTitle}></i>
        </button>
    );
};

// Set the PropTypes validations and default values.
BoxButton.propTypes = propTypes;
BoxButton.defaultProps = defaultProps;

export default BoxButton;