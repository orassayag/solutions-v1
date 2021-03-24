import React from 'react';
import PropTypes from 'prop-types';
import './Photo.less';
import translate from '../../../translate/translate';
import { PhotoActionType } from '../../../utils/enums';
import { PhotoDetail, PhotoAction } from '../';

// Components parameter and functions PropTypes validations.
const propTypes = {
    actionIconClick: PropTypes.func.isRequired,
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    photoActionType: PropTypes.string,
    onPhotoClick: PropTypes.func.isRequired
};

// Components default values.
const defaultProps = {
    photoActionType: null
};

const Photo = (props) => {
    // Manually validate parameters just in case. If any of them is missing - don't print the photo data, but no need to throw an error.
    if (!props.albumId || !props.id || !props.title || !props.url || !props.thumbnailUrl) {
        return null;
    }

    const photoDesignData = {
        modeClass: '',
        moreInfo: null,
        sideIcon: 'plus-circle',
        containerClass: 'col-md-4 p0'
    };

    if (props.photoActionType) {
        switch (props.photoActionType) {
            case PhotoActionType.ADDED:
                photoDesignData.modeClass = ' added';
                photoDesignData.sideIcon = 'check-circle';
                break;
            default:
                break;
        }
    }

    return (
        <div className={photoDesignData.containerClass}>
            <div className="item-result">
                <div className={`result-container${photoDesignData.modeClass}`}>
                    <div className="row result-top">
                        <PhotoDetail colNumberClass={2}
                            labelText={translate.photo_item_photo_label}
                            valueClass="result-image"
                            value={props.thumbnailUrl}
                            linkMode={false}
                            imageMode={true}
                            photoId={props.id}
                            onPhotoClick={props.onPhotoClick} />
                        <PhotoDetail colNumberClass={10}
                            labelText={translate.photo_item_photo_label}
                            valueClass="result-dynamic"
                            value={props.title}
                            linkMode={false}
                            imageMode={false}
                            photoId={props.id}
                            onPhotoClick={props.onPhotoClick} />
                        <PhotoDetail colNumberClass={10}
                            labelText={translate.photo_item_link_label}
                            valueClass="result-dynamic"
                            value={props.url}
                            linkMode={true}
                            imageMode={false}
                            photoId={props.id}
                            onPhotoClick={props.onPhotoClick} />
                        <PhotoAction id={props.id}
                            modeClass={photoDesignData.modeClass}
                            sideIcon={photoDesignData.sideIcon}
                            actionIconClick={props.actionIconClick} />
                    </div>
                </div>
                {photoDesignData.moreInfo}
            </div>
        </div>
    );
};

// Set the PropTypes validators and default values.
Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;

export default Photo;