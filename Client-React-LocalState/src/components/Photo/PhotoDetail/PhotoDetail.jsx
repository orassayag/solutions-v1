import React from 'react';
import PropTypes from 'prop-types';
import './PhotoDetail.less';
import { generateClassName } from '../../../utils/textUtils';
import translate from '../../../translate/translate';

// Components parameter and functions PropTypes validations.
const propTypes = {
    photoId: PropTypes.number.isRequired,
    colNumberClass: PropTypes.number.isRequired,
    labelText: PropTypes.string.isRequired,
    valueClass: PropTypes.string,
    value: PropTypes.string.isRequired,
    linkMode: PropTypes.bool.isRequired,
    imageMode: PropTypes.bool.isRequired,
    onPhotoClick: PropTypes.func.isRequired
};

// Components default values.
const defaultProps = {
    valueClass: ''
};

const PhotoDetail = (props) => {
    // Manually validate parameters just in case.
    if (!props.colNumberClass || !props.labelText || !props.value) {
        throw new Error(translate.error_missing.replace('#params#', 'colNumberClass or labelText or value'));
    }

    let label = (
        <div className="result-label">
            {props.labelText}:
        </div>
    );

    let value = props.value;
    if (props.linkMode) {
        value = (
            <a href={props.value} target="_blank" rel="noopener noreferrer">{props.value}</a>
        );
    }

    if (props.imageMode) {
        label = null;
        value = (
            <a href={null} onClick={props.onPhotoClick} data-id={props.photoId}>
                <img src={props.value} alt='' title='' />
            </a>
        );
    }

    const resultClass = generateClassName(props.valueClass, 'result-value', props.valueClass);
    return (
        <div className={`col-sm-${props.colNumberClass}`}>
            {label}
            <div className={resultClass}>
                {value}
            </div>
        </div>
    );
};

// Set the PropTypes validations and default values.
PhotoDetail.propTypes = propTypes;
PhotoDetail.defaultProps = defaultProps;

export default PhotoDetail;