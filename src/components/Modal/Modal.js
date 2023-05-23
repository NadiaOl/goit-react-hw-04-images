
import React, {useEffect} from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css';
import PropTypes from "prop-types";

const modalRoot = document.querySelector('#modal-root') 

export const Modal = ({closeModal, largePicture})=> {
    useEffect(() => {
    window.addEventListener('keydown', handleEscClose)
}, []);
    
useEffect(() => {
    return () => {
    window.removeEventListener('keydown', handleEscClose)
};
}, []);
    
    const handleEscClose = (event) => {
        if(event.code === 'Escape')
        closeModal()
    }
    
    const handleBackdropClose = (event) => {
        if(event.target === event.currentTarget)
        closeModal()
    }
    
            return createPortal(
                <div className={css.Overlay} onClick={handleBackdropClose}>
                <div className={css.Modal}>
                    <img src={largePicture} alt="some" />
                </div>
            </div>, modalRoot
            )

    }
    

Modal.propTypes = {
    largePicture: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
}