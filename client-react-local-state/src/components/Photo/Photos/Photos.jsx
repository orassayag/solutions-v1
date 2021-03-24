import React from 'react';
import PropTypes from 'prop-types';
import './Photos.less';
import { Photo } from '../';
import { Loader } from '../../UI';

// Components parameter and functions PropTypes validations.
const propTypes = {
    isLoading: PropTypes.bool.isRequired,
    photosError: PropTypes.bool.isRequired,
    isNotFound: PropTypes.bool.isRequired,
    actionIconClick: PropTypes.func,
    onPhotoClick: PropTypes.func,
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            actionIconClick: PropTypes.func,
            albumId: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            photoActionType: PropTypes.string
        }).isRequired
    ).isRequired
};

// Components default values.
const defaultProps = {
    photos: null,
    onPhotoClick: null
};

const Photos = (props) => {
    const photosData = {
        havePhotos: props.photos && props.photos.length > 0,
        containerClass: 'col-md-12 col-sm-12',
        photosTitle: null,
        notFoundClass: null,
        photosBody: null,
        photosHtml: null
    };

    if (props.isLoading) {
        photosData.photosBody = (<Loader isInsideModal={false} />);
    }
    else if (photosData.havePhotos && !props.photosError) {
        photosData.photosHtml = props.photos.map(ctrl => (
            <Photo key={ctrl.id}
                albumId={ctrl.albumId}
                id={ctrl.id}
                title={ctrl.title}
                url={ctrl.url}
                thumbnailUrl={ctrl.thumbnailUrl}
                photoActionType={ctrl.photoActionType}
                actionIconClick={props.actionIconClick}
                onPhotoClick={props.onPhotoClick} />
        ));

        photosData.photosBody = (
            <div className="content-area">
                <div className="container">
                    <div className="row">
                        <div className={photosData.containerClass}>
                            <div className="section">
                                <div className="property-th-list">
                                    {photosData.photosHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="recent-property">
            {photosData.photosTitle}
            {photosData.photosBody}
        </div>
    );
};

// Set the PropTypes validators and default values.
Photos.propTypes = propTypes;
Photos.defaultProps = defaultProps;

export default Photos;