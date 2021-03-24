import React from 'react';
import PropTypes from 'prop-types';
import './SubmitButton.less';
import { validateButtonType } from '../../../utils/validationUtils';
import { generateClassName } from '../../../utils/textUtils';
import translate from '../../../translate/translate';

const propTypes = {
    title: PropTypes.string.isRequired,
    isDifferentColor: PropTypes.bool.isRequired,
    buttonType: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

// Components default values.
const defaultProps = {};

const SubmitButton = (props) => {
    // Manually validate parameters just in case.
    if (!props.buttonType || !props.title) {
        throw new Error(translate.error_missing.replace('#params#', 'buttonType or title'));
    }

    // Validate that the type of the button is not invalid.
    if (!validateButtonType(props.buttonType)) {
        throw new Error(translate.error_invalid.replace('#params#', 'buttonType'));
    }

    const differentClass = generateClassName(props.isDifferentColor, 'btn btn-default', 'different');
    return (
        <button type={props.buttonType} className={differentClass} onClick={props.onClick} title={props.title}>{props.title}</button>
    );
};

// Set the PropTypes validators and default values.
SubmitButton.propTypes = propTypes;
SubmitButton.defaultProps = defaultProps;

export default SubmitButton;