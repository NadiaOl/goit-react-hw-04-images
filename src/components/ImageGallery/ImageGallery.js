import React, {useState, useEffect} from "react";
import { getPicture } from '../../API/API';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import {Button} from '../Button/Button';
import css from './ImageGallery.module.css';
import { Modal } from "components/Modal/Modal";

export const ImageGallery = ({searchText, setPage, page}) =>  {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isShowModal, setIsShowModal] = useState(false)
    const [largePicture, setLargePicture] = useState('')

    useEffect(() => {
        if (searchText && page <=1 ) {
            setData(null)
            setIsLoading(true)
            getPicture(searchText, page)
                .then(response => response.json())
                .then((data) =>
                    setData(data.hits))
                .catch((error) => console.log(error))
                .finally(() =>
                    setIsLoading(false),)
        }
        if (page > 1) {
            setIsLoading(true)
            getPicture(searchText, page)
                .then(response => response.json())
                .then((data) =>
                    setData(prevData =>[...prevData, ...data.hits]))
                .catch((error) => console.log(error))
                .finally(() =>
                    setIsLoading(false))}
    }, [page, searchText, setPage])
    
    const hendlerButtonClick = (e) => {
        setPage(page + 1)
    };
    
    const showModal = (largeImageURL) =>{
        setIsShowModal(true)
        setLargePicture(largeImageURL)
    }
    
    const closeModal = () => {
        setIsShowModal(false)
    }
    
    return(
        <>
            {isShowModal && <Modal data={data} largePicture={largePicture} closeModal={closeModal} />}
            {isLoading && <Loader />}
            <ul className={css.ImageGallery}>
                <ImageGalleryItem data={data} showModal={showModal}/>
            </ul>
            {data && <Button onClick={hendlerButtonClick}/>}
        </>)
    }
