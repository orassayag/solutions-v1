import React from 'react';
import PropTypes from 'prop-types';
import './PhotoAction.less';
import translate from '../../../translate/translate';

// Components parameter and functions PropTypes validations.
const propTypes = {
    id: PropTypes.number.isRequired,
    modeClass: PropTypes.string,
    sideIcon: PropTypes.string.isRequired,
    actionIconClick: PropTypes.func.isRequired
};

// Components default values.
const defaultProps = {
    modeClass: ''
};

const PhotoAction = (props) => {
    // Manually validate parameters just in case.
    if (!props.id || !props.sideIcon) {
        throw new Error(translate.error_missing.replace('#params#', 'id or sideIcon'));
    }

    return (
        <div className="col-sm-1">
            <div className="item-delete">
                <a data-id={`photo-${props.id}`} href={null} onClick={props.actionIconClick} className={`list-group-item${props.modeClass}`}>
                    {<span className={`fa fa-${props.sideIcon}`}></span>}
                </a>
            </div>
        </div>
    );
};

// Set the PropTypes validations and default values.
PhotoAction.propTypes = propTypes;
PhotoAction.defaultProps = defaultProps;

export default PhotoAction;