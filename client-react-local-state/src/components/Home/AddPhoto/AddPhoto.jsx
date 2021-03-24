import React from 'react';
import PropTypes from 'prop-types';
import './AddPhoto.less';
import translate from '../../../translate/translate';
import { Auxiliary } from '../../../hoc';
import { ErrorBox, SubmitButton } from '../../UI';

// Components parameter and functions PropTypes validations.
const propTypes = {
    photo: PropTypes.object,
    commentsValue: PropTypes.string,
    commentsChange: PropTypes.func.isRequired,
    addClick: PropTypes.func.isRequired,
    cancelClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};

// Components default values.
const defaultProps = {
    photo: null,
    commentsValue: '',
    errorMessage: null
};

const AddPhoto = (props) => {
    if (!props.photo) {
        return null;
    }

    return (
        <Auxiliary>
            <div className="modal-header">
                <h4 className="modal-title">{translate.add_photo_modal_title}</h4>
                <p>{translate.add_photo_modal_text} {props.photo.title}?</p>
            </div>
            <div className="modal-body">
                <textarea className="form-control" onChange={props.commentsChange} value={props.commentsValue} spellCheck={false} rows="5"></textarea>
                <ErrorBox text={props.errorMessage}
                    searchOption={false} />
            </div>
            <div className="modal-footer">
                <SubmitButton buttonType="button"
                    isDifferentColor={true}
                    title={translate.add_photo_modal_cancel_button}
                    onClick={props.cancelClick} />
                <SubmitButton buttonType="submit"
                    isDifferentColor={false}
                    title={translate.add_photo_modal_ok_button}
                    onClick={props.addClick} />
            </div>
        </Auxiliary>
    );
};

// Set the PropTypes validators and default values.
AddPhoto.propTypes = propTypes;
AddPhoto.defaultProps = defaultProps;

export default AddPhoto;