import moment from 'moment';

// Return date within desired format.
export const formatDate = (date) => {
    if (!date) {
        return '';
    }
    return moment(date).format('YYYY-MM-DD HH:m');
};

// Get creation year for the footer's title.
// If the current year is passed, will display the creation year until the current year.
export const getCreationYear = () => {
    const yearsData = {
        creationYear: 2018,
        currentYear: moment().year(),
        result: null
    };

    yearsData.result = yearsData.creationYear;
    if (yearsData.creationYear !== yearsData.currentYear) {
        yearsData.result = `${yearsData.creationYear} - ${yearsData.currentYear}`;
    }
    return yearsData.result;
};

// Merges 2 classes together if the given condition is true.
export const generateClassName = (condition, originalClassName, newClassName) => {
    let resultClass = originalClassName;
    if (condition) {
        resultClass += ` ${newClassName}`;
    }
    return resultClass;
};