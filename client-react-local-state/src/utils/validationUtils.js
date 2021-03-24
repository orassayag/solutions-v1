// Validate the html button tag type.
export const validateButtonType = (buttonType) => {
    if (!buttonType) {
        return false;
    }

    switch (buttonType) {
        case 'button':
        case 'submit':
            return true;
        default:
            return false;
    }
};

// Validate the html input tag type.
export const validateInputType = (inputType) => {
    if (!inputType) {
        return false;
    }

    switch (inputType) {
        case 'text':
        case 'email':
        case 'password':
            return true;
        default:
            return false;
    }
};

export const validateSearchKey = (value) => {
    if (!value) {
        return false;
    }
    return baseValidateAlphanumeric(value);
};

// Validate url address for search mode of URL.
export const validateUrl = (value) => {
    if (!value) {
        return false;
    }

    const prefix = 'http://';
    const prefixSSL = 'https://';
    if (value.substr(0, prefix.length) !== prefix && value.substr(0, prefixSSL.length) !== prefixSSL) {
        value = prefix + value;
    }

    const regexExpression = new RegExp(
        '^' +
        // Protocol identifier.
        '(?:(?:https?|ftp)://)' +
        // User:pass authentication.
        '(?:\\S+(?::\\S*)?@)?' +
        '(?:' +
        // IP address exclusion
        // private & local networks
        '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
        '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
        '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
        // IP address dotted notation octets
        // excludes loopback network 0.0.0.0
        // excludes reserved space >= 224.0.0.0
        // excludes network & broadcast addresses
        // (first & last IP address of each class)
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
        '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
        '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
        '|' +
        // Host name.
        '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
        // Domain name.
        '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
        // TLD identifier.
        '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
        // TLD may end with a dot.
        '\\.?' +
        ')' +
        // Port number.
        '(?::\\d{2,5})?' +
        // Resource path.
        '(?:[/?#]\\S*)?' +
        '$', 'i'
    );
    return regexExpression.test(value);
};

// Validate email address for username registration.
export const validateEmail = (value) => {
    if (!value) {
        return false;
    }

    // Validate base structure with regular expression.
    const regexExpression = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regexExpression.test(value);
};

/* Validate password on registration - password must be:
^ - The password string will start this way.
(?=.*[a-z])	- The string must contain at least 1 lowercase alphabetical character.
(?=.*[A-Z])	- The string must contain at least 1 uppercase alphabetical character.
(?=.*[0-9])	- The string must contain at least 1 numeric character.
(?=.*[!@#\$%\^&\*]) - The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict.
(?=.{8,}) - The string must be eight characters or longer.
*/
export const validatePassword = (value) => {
    if (!value) {
        return false;
    }
    const regexExpression = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    return regexExpression.test(value);
};

// Validate a given value of maximum length.
export const validateCharactersLength = (value, maximumCharactersCount) => {
    if (!value || !maximumCharactersCount || maximumCharactersCount <= 0) {
        return false;
    }
    return value.length < maximumCharactersCount;
};

// a-z0-9 - Alphanumeric characters.
// \u0590-\u05FF - Hebrew characters.
// exceptionCharactersArray - dynamic characters.
// Also space is allowed.
const baseValidateAlphanumeric = (value, exceptionCharactersArray) => {
    if (!value) {
        return false;
    }

    let exceptions = '';
    if (exceptionCharactersArray && exceptionCharactersArray.length > 0) {
        exceptionCharactersArray.forEach((c) => {
            exceptions += c;
        });
    }
    const regexExpression = new RegExp(`^[a-z0-9\u0590-\u05FF ${exceptions}]+$`, 'i');
    return regexExpression.test(value);
};