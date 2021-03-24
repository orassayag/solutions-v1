import React from 'react';
import PropTypes from 'prop-types';
import './FieldBox.less';
import translate from '../../../translate/translate';
import { TextBox } from '../../UI';

// Components parameter and functions PropTypes validations.
const propTypes = {
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    onTextBoxChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};

// Components default values.
const defaultProps = {
    errorMessage: ''
};

const FieldBox = (props) => {
    // Manually validate parameters just in case.
    if (!props.labelText || !props.inputType || !props.placeHolder) {
        throw new Error(translate.error_missing.replace('#params#', 'labelText or inputType or placeHolder'));
    }

    return (
        <div className="form-group">
            <label htmlFor={props.inputType}>{props.labelText}</label>
            <TextBox inputType={props.inputType}
                classType=""
                placeHolder={props.placeHolder}
                onChange={props.onTextBoxChange}
                errorMessage={props.errorMessage} />
        </div>
    );
};

// Set the PropTypes validators and default values.
FieldBox.propTypes = propTypes;
FieldBox.defaultProps = defaultProps;

export default FieldBox;