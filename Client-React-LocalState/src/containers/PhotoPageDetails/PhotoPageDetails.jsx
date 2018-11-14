import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PhotoPageDetails.less';
import { getPhotoById } from '../../api/routes/photos';
import { Auxiliary } from '../../hoc';

// Components parameter and functions PropTypes validations.
const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    })
};

// Components default values.
const defaultProps = {};

class PhotoPageDetails extends Component {
    state = {
        photo: null
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            throw new Error('Missing photo id');
        }

        id = Number(id);
        if (!id || isNaN(id)) {
            throw new Error('Invalid photo id');
        }

        getPhotoById(id)
            .then((response) => {
                this.setState({ photo: response });
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    render() {

        if (!this.state.photo) {
            return null;
        }

        return (
            <Auxiliary>
                <div className="photo-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={this.state.photo.url} title={this.state.photo.title} alt={this.state.photo.title} />
                            </div>
                            <div className="col-sm-6">
                                <div className='result-value'>
                                    <span>Id:</span> {this.state.photo.id}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className='result-value'>
                                    <span>Album Id:</span> {this.state.photo.albumId}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className='result-value'>
                                    <span>Title:</span> {this.state.photo.title}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className='result-value'>
                                    <a href={this.state.photo.url} target="_blank" rel="noopener noreferrer">Image Url</a>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className='result-value'>
                                    <a href={this.state.photo.thumbnailUrl} target="_blank" rel="noopener noreferrer">Thumb Url</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Auxiliary>
        );
    }
}

// Set the PropTypes validations and default values.
PhotoPageDetails.propTypes = propTypes;
PhotoPageDetails.defaultProps = defaultProps;

export default PhotoPageDetails;