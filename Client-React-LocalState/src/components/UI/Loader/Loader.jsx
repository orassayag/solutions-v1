import React from 'react';
import PropTypes from 'prop-types';
import './Loader.less';
import translate from '../../../translate/translate';
import { generateClassName } from '../../../utils/textUtils';

// Components parameter and functions PropTypes validations.
const propTypes = {
    isInsideModal: PropTypes.bool.isRequired
};

// Components default values.
const defaultProps = {};

const Loader = (props) => {
    const loaderClass = generateClassName(props.isInsideModal, 'loader', 'modal');

    return (
        <div className={loaderClass} title={translate.loader_alternative_text}>{translate.loader_alternative_text}</div>
    );
};

// Set the PropTypes validations and default values.
Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;