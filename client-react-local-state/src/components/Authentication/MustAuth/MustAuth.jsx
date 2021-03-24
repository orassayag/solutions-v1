import React from 'react';
import PropTypes from 'prop-types';
import './MustAuth.less';
import auth from '../../../assets/img/auth.png';
import translate from '../../../translate/translate';
import { Auxiliary } from '../../../hoc';
import { SubmitButton } from '../../UI';

// Components parameter and functions PropTypes validations.
const propTypes = {
    cancelClick: PropTypes.func.isRequired,
    authClick: PropTypes.func.isRequired
};

// Components default values.
const defaultProps = {};

const MustAuth = (props) => {
    return (
        <Auxiliary>
            <div className="modal-header">
                <h4 className="modal-title">{translate.authentication_modal_title}</h4>
            </div>
            <div className="modal-body">
                <img src={auth} alt={translate.authentication_modal_image_alt_title} title={translate.authentication_modal_image_alt_title} />
                <p>{translate.authentication_modal_text}</p>
            </div>
            <div className="modal-footer">
                <SubmitButton buttonType="button"
                    isDifferentColor={true}
                    title={translate.authentication_modal_cancel_button}
                    onClick={props.cancelClick} />
                <SubmitButton buttonType="button"
                    isDifferentColor={false}
                    title={translate.authentication_modal_register_login_button}
                    onClick={props.authClick} />
            </div>
        </Auxiliary>
    );
};

// Set the PropTypes validators and default values.
MustAuth.propTypes = propTypes;
MustAuth.defaultProps = defaultProps;

export default MustAuth;