import React from 'react';
import PropTypes from 'prop-types';
import { validateInputType } from '../../../utils/validationUtils';
import { generateClassName } from '../../../utils/textUtils';
import translate from '../../../translate/translate';
import { Auxiliary } from '../../../hoc';
import { ErrorBox } from '../';

// Components parameter and functions PropTypes validations.
const propTypes = {
    inputType: PropTypes.string.isRequired,
    classType: PropTypes.string,
    placeHolder: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string
};

// Components default values.
const defaultProps = {
    classType: '',
    errorMessage: '',
    onChange: null
};

const TextBox = (props) => {
    // Manually validate parameters just in case.
    if (!props.inputType || !props.placeHolder) {
        throw new Error(translate.error_missing.replace('#params#', 'inputType or placeHolder'));
    }

    // Validate that the type of the input is not invalid.
    if (!validateInputType(props.inputType)) {
        throw new Error(translate.error_invalid.replace('#params#', 'inputType'));
    }

    const typeClass = generateClassName(props.classType, 'form-control', props.classType);
    return (
        <Auxiliary>
            <input data-id={props.inputType} type={props.inputType} className={typeClass} placeholder={props.placeHolder} onChange={props.onChange} autoComplete='on' spellCheck={false} />
            <ErrorBox text={props.errorMessage}
                searchOption={false} />
        </Auxiliary>
    );
};

// Set the PropTypes validations and default values.
TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export default TextBox;