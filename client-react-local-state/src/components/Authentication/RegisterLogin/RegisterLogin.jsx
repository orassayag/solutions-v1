import React from 'react';
import PropTypes from 'prop-types';
import './RegisterLogin.less';
import translate from '../../../translate/translate';
import { AuthMode, AuthInputType } from '../../../utils/enums';
import { FieldBox } from '../';
import { SubmitButton } from '../../UI';

// Components parameter and functions PropTypes validations.
const propTypes = {
    mode: PropTypes.string.isRequired,
    onLoginRegisterClick: PropTypes.func.isRequired,
    onTextBoxChange: PropTypes.func.isRequired,
    emailError: PropTypes.string,
    passwordError: PropTypes.string
};

// Components default values.
const defaultProps = {
    emailError: '',
    passwordError: ''
};

const RegisterLogin = (props) => {
    // Manually validate parameters just in case.
    if (!props.mode) {
        throw new Error(translate.error_missing.replace('#params#', 'mode'));
    }

    let data = null;
    switch (props.mode) {
        case AuthMode.LOGIN:
            data = {
                title: translate.authentication_page_login_title,
                buttonText: translate.authentication_page_login_button,
                bottomText: translate.authentication_page_login_switch_link,
                linkText: translate.authentication_page_login_link_text
            };
            break;
        case AuthMode.REGISTRATION:
            data = {
                title: translate.authentication_page_register_title,
                buttonText: translate.authentication_page_register_button,
                bottomText: translate.authentication_page_register_switch_link,
                linkText: translate.authentication_page_register_link_text
            };
            break;
        default:
            throw new Error(translate.error_missing.replace('#params#', 'mode'));
    }

    return (
        <div className="register-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="box-for">
                            <div className="col-md-12 col-xs-12 register-blocks">
                                <h2>{data.title}:</h2>
                                <form method="post">
                                    <FieldBox labelText={translate.authentication_page_photo_label}
                                        inputType={AuthInputType.email}
                                        placeHolder={translate.authentication_page_photo_placeholder}
                                        onTextBoxChange={props.onTextBoxChange}
                                        errorMessage={props.emailError} />
                                    <FieldBox labelText={translate.authentication_page_password_label}
                                        inputType={AuthInputType.password}
                                        placeHolder={translate.authentication_page_password_placeholder}
                                        onTextBoxChange={props.onTextBoxChange}
                                        errorMessage={props.passwordError} />
                                    <div className="text-center">
                                        <SubmitButton buttonType="submit"
                                            isDifferentColor={false}
                                            title={data.buttonText}
                                            onClick={props.onLoginRegisterClick}
                                            errorMessage={props.passwordError} />
                                    </div>
                                    <div className="registration-login">
                                        {data.bottomText} <a href="#">{data.linkText}</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Set the PropTypes validators and default values.
RegisterLogin.propTypes = propTypes;
RegisterLogin.defaultProps = defaultProps;

export default RegisterLogin;