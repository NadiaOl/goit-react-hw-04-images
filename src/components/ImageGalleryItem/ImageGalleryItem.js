import React from "react";
import PropTypes from "prop-types";

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({data, showModal}) => {
    return (
        
        data &&
        data.map(({id, webformatURL, largeImageURL}) => {
            return <li className={css.ImageGalleryItem} key={id} onClick={() => showModal(largeImageURL)} >
                <img className={css.ImageGalleryItemImage} alt={id} src={webformatURL}></img>
            </li>
        })

)
}

ImageGalleryItem.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,})),
    showModal: PropTypes.func.isRequired,
}