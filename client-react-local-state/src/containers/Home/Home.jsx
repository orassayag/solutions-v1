import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAllPhotos } from '../../api/routes/photos';
import { updateObject } from '../../utils/coreUtils';
import { PhotoActionType, ModalName } from '../../utils/enums';
import translate from '../../translate/translate';
import { Auxiliary } from '../../hoc';
import { Photos } from '../../components/Photo';
import { Modal } from '../../components/UI';
import { MustAuth } from '../../components/Authentication';
import { AddPhoto } from '../../components/Home';

class Home extends Component {
    state = {
        componentMounted: false,
        isAuthenticated: true,
        userPhotosCount: 3,
        photoComments: '',
        showModal: false,
        loadingPhotos: true,
        loadingModal: false,
        photosError: false,
        modalError: null,
        addPhoto: {
            photo: null,
            error: null
        },
        photos: []
    };

    generatePhotosTimeout = null;

    constructor(props) {
        super(props);

        // Bind all the functions.
        this.handleOnPhotoClick = this.handleOnPhotoClick.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
    }

    componentDidMount() {
        this.setState({ componentMounted: true });

        getAllPhotos(10)
            .then((response) => {
                this.setState((prevState) => {
                    return {
                        photos: response,
                        loadingPhotos: !prevState.loadingPhotos
                    };
                });
            });
    }

    // To avoid any leak of memory during first load of the photos, while user can redirect to other page while
    // settimeout is still running (in production by axios), need to clear the timeout (in development).
    componentWillUnmount() {
        if (this.generatePhotosTimeout) {
            window.clearTimeout(this.generatePhotosTimeout);
        }
    }

    handleToggleAddPhotoModal = (e) => {
        const addPhotoData = {
            photoId: null,
            photoRow: null,
            showAddPhotoModal: true
        };

        if (e.currentTarget.dataset.id) {
            addPhotoData.photoId = Number(e.currentTarget.dataset.id.substr(6));
            if (!addPhotoData.photoId || isNaN(addPhotoData.photoId)) {
                throw new Error(translate.error_not_found.replace('#param#', 'photoId'));
            }
        }

        addPhotoData.photoRow = this.state.photos.find(photo => photo.id === addPhotoData.photoId);
        if (addPhotoData.photoRow) {
            // Check that the photo was not already added to user's photos list.
            if (addPhotoData.photoRow.photoActionType && addPhotoData.photoRow.photoActionType === PhotoActionType.ADDED) {
                addPhotoData.showAddPhotoModal = false;
            }
        }
        else {
            // If photoId doesn't exists, the user probable clicked on the X button on the modal to close it.
            addPhotoData.showAddPhotoModal = false;
        }

        if (addPhotoData.showAddPhotoModal) {
            this.manageAddPhoto({
                photo: addPhotoData.photoRow,
                error: null,
                clearComments: true,
                toggleModal: true
            });
        }
        else {
            this.manageAddPhoto({
                photo: null,
                error: null,
                clearComments: true,
                toggleModal: false,
                showModal: false
            });
        }
    }

    // On add photo modal, track on comments textbox changes.
    handleCommentsChange = (e) => {
        this.setState({ photoComments: e.target.value });
    }

    handleAddPhotoClick = () => {
        const state = this.state;

        // ToDo: Add logic of add photo to user's photos.
        if (!state.addPhoto.photo) {
            throw new Error(translate.error_not_found.replace('#param#', `Photo ${state.addPhoto.photo}`));
        }

        // Determine if the user comments are valid (if entered).
        let commentsError = null;

        // ToDo: Validate here.

        // If there are validation errors, don't continue.
        if (commentsError) {
            this.manageAddPhoto({
                photo: state.addPhoto.photo,
                error: commentsError,
                clearComments: false,
                toggleModal: false,
                showModal: true
            });
            return;
        }

        // Set the state.
        this.setState({ loadingModal: true });

        // Add photo to user's photos list.
        // Make a shallow copy of the photos.
        const photos = [...state.photos];

        // Get the index of the photo.
        const photoToUpdateIndex = photos.findIndex(photo => photo.id === state.addPhoto.photo.id);
        if (photoToUpdateIndex < 0) {
            throw new Error(translate.error_not_found.replace('#param#', `Photo ${state.addPhoto.photo}`));
        }

        // Simulate loading until real ajax call.
        setTimeout(() => {
            this.setState({ loadingModal: false });

            // Determine if to simulate error on adding the photo.
            let addError = false;
            if (addError) {
                this.setState({ modalError: translate.add_photo_modal_error_general });
                setTimeout(() => {
                    this.resetAddPhoto();
                    this.setState({ modalError: null });
                }, 1000);
            }
            else {
                // Reset all added photo's state properties.
                this.resetAddPhoto();

                setTimeout(() => {
                    // Update the photo.
                    photos[photoToUpdateIndex].photoActionType = PhotoActionType.ADDED;
                    this.setState({ photos: photos });
                }, 100);
            }
        }, 1000);
    }

    handleCancelModalClick = () => {
        this.resetAddPhoto();
    }

    handleRedirectToAuthClick = () => {
        this.props.history.push('/auth');
    }

    handleOnPhotoClick = (e) => {
        e.preventDefault();

        const id = e.currentTarget.dataset.id;

        this.props.history.push(`/photo/${id}`);
    }

    resetAddPhoto = () => {
        this.manageAddPhoto({
            photo: null,
            clearComments: true,
            toggleModal: false,
            showModal: false
        });
    }

    manageAddPhoto = (data) => {
        if (!data) {
            throw new Error(translate.error_missing.replace('#params#', 'data'));
        }

        const updatedAddPhoto = updateObject(this.state.addPhoto, {
            photo: data.photo,
            error: data.error ? data.error : null
        });

        this.setState((prevState) => {
            return {
                photoComments: data.clearComments ? '' : prevState.photoComments,
                showModal: data.toggleModal ? !prevState.showModal : data.showModal,
                addPhoto: updatedAddPhoto
            };
        });
    }

    managePhotosContent = () => {
        const state = this.state;

        return (
            <Photos isLoading={state.loadingPhotos}
                photosError={state.photosError}
                isNotFound={false}
                actionIconClick={this.handleToggleAddPhotoModal}
                photos={state.photos}
                onPhotoClick={this.handleOnPhotoClick} />
        );
    }

    manageModals = () => {
        const state = this.state;
        const modalContent = {
            isLarge: false,
            name: '',
            content: ''
        };

        if (state.isAuthenticated) {
            modalContent.isLarge = true;
            modalContent.name = ModalName.AddPhoto;
            modalContent.content = (
                <AddPhoto photo={state.addPhoto.photo}
                    commentsValue={state.photoComments}
                    commentsChange={this.handleCommentsChange}
                    addClick={this.handleAddPhotoClick}
                    cancelClick={this.handleCancelModalClick}
                    errorMessage={state.addPhoto.error} />
            );
        }
        else {
            modalContent.name = ModalName.MustAuth;
            modalContent.content = (
                <MustAuth cancelClick={this.handleCancelModalClick}
                    authClick={this.handleRedirectToAuthClick} />
            );
        }
        return modalContent;
    }

    render() {
        const state = this.state;
        const contentData = {
            photosContent: this.managePhotosContent(),
            modalContent: this.manageModals()
        };

        return (
            <Auxiliary>
                {contentData.photosContent}
                <Modal show={state.showModal}
                    loading={state.loadingModal}
                    isLarge={contentData.modalContent.isLarge}
                    close={this.handleToggleAddPhotoModal}
                    modalName={contentData.modalContent.name}
                    error={state.modalError}>
                    {contentData.modalContent.content}
                </Modal>
            </Auxiliary>
        );
    }
}

Home.propTypes = {
    history: PropTypes.object
};

export default Home;