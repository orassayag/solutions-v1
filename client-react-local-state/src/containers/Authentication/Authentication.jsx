import React, { Component } from 'react';
import { AuthMode, AuthInputType } from '../../utils/enums';
import translate from '../../translate/translate';
import { Auxiliary } from '../../hoc';
import { PageTitle } from '../../components/UI';
import { RegisterLogin } from '../../components/Authentication';

class Authentication extends Component {
    state = {
        mode: AuthMode.REGISTRATION,
        emailText: '',
        passwordText: '',
        emailError: null,
        passwordError: null
    };

    constructor(props) {
        super(props);

        // Bind all the functions.
        this.handleAuthenticationInputChange = this.handleAuthenticationInputChange.bind(this);
    }

    // Track the changes of email / password.
    handleAuthenticationInputChange = (e) => {
        e.preventDefault();

        const textBoxType = e.currentTarget.dataset.id;
        const textBoxValue = e.target.value;

        // Check the parameter.
        if (!textBoxType) {
            throw new Error(translate.error_missing.replace('#params#', 'textBoxType'));
        }

        // Validate that the text box type is valid.
        switch (textBoxType) {
            case AuthInputType.email:
            case AuthInputType.password:
                break;
            default:
                throw new Error(translate.error_invalid.replace('#params#', 'textBoxType'));
        }

        // Update the state.
        this.setState({ [`${textBoxType}Text`]: textBoxValue });
    }

    // Handle the submit click buttin on the login / registration form.
    handleOnLoginRegisterClick = (e) => {
        e.preventDefault();
        switch (this.state.mode) {
            case AuthMode.LOGIN:
                break;
            case AuthMode.REGISTRATION:
                this.validateRegistrationMode();
                break;
            default:
                break;
        }
    }

    validateLoginMode = () => {

    }

    validateRegistrationMode = () => {
        const state = this.state;

        // Will determine if the form is valid or not.
        let isValidForm = true;

        // Validate the email parameter.
        if (!state.emailText) {
            this.manageInputErrors(AuthInputType.email, translate.authentication_page_error_empty_email);
            isValidForm = false;
        }

        if (isValidForm) {

        }
    };

    manageInputErrors(textBoxType, errorText) {
        this.setState({ [`${textBoxType}Error`]: errorText });
    }

    render() {
        const state = this.state;

        return (
            <Auxiliary>
                <PageTitle title={translate.authentication_page_title} />
                <RegisterLogin mode={state.mode}
                    onLoginRegisterClick={this.handleOnLoginRegisterClick}
                    onTextBoxChange={this.handleAuthenticationInputChange}
                    emailError={state.emailError}
                    passwordError={state.passwordError} />
            </Auxiliary>
        );
    }
}

export default Authentication;