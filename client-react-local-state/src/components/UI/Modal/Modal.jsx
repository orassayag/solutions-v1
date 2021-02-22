import React from 'react';
import PropTypes from 'prop-types';
import './Modal.less';
import translate from '../../../translate/translate';
import { generateClassName } from '../../../utils/textUtils';
import { Loader } from '../';

// Components parameter and functions PropTypes validations.
const propTypes = {
    children: PropTypes.node,
    modalName: PropTypes.string,
    show: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    isLarge: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    error: PropTypes.string
};

// Components default values.
const defaultProps = {
    error: '',
    children: null
};

const Modal = (props) => {
    // Manually validate parameters just in case.
    if (!props.close) {
        throw new Error(translate.error_missing.replace('#params#', 'close'));
    }

    const modalData = {
        modalClass: generateClassName(props.isLarge, 'modal-dialog', 'modal-lg'),
        modalNameClass: generateClassName(props.modalName, 'modal-content', props.modalName),
        contentModal: props.children,
        closeButton: null
    };

    if (props.loading) {
        modalData.contentModal = (<Loader isInsideModal={true} />);
    }
    else if (props.error) {
        modalData.contentModal = (<p>{props.error}</p>);
        modalData.modalNameClass = generateClassName(true, 'modal-content', 'error');
    }
    else {
        modalData.closeButton = (
            <label onClick={props.close} htmlFor="modal-switch" className="close" data-dismiss="modal" aria-label={translate.modal_close_button_title} title={translate.modal_close_button_title}>
                <span aria-hidden="true" title={translate.modal_close_button_title}>
                    &times;
                </span>
            </label>
        );
    }

    return (
        <div className="pure-css-bootstrap-modal">
            <input id="modal-switch" type="checkbox" checked={props.show} onChange={props.close} />
            <div id="myModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <label className="modal-backdrop fade" htmlFor="modal-switch"></label>
                <div className={modalData.modalClass} role="document">
                    <div className={modalData.modalNameClass}>
                        {modalData.closeButton}
                        {modalData.contentModal}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Set the PropTypes validations and default values.
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;