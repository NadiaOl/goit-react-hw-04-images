import React, {useState, useEffect} from "react";
import { getPicture } from '../../API/API';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import {Button} from '../Button/Button';
import css from './ImageGallery.module.css';
import { Modal } from "components/Modal/Modal";

export const ImageGallery = ({searchText}) =>  {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [isShowModal, setIsShowModal] = useState(false)
    const [largePicture, setLargePicture] = useState('')

    useEffect(() => {
        if (searchText) {
            setIsLoading(true)
            getPicture(searchText, 1)
                .then(response => response.json())
                .then((data) =>
                    setData(data.hits))
                .catch((error) => console.log(error))
                .finally(() =>
                    setIsLoading(false))}
    },[])
    
    useEffect(() => {
        if (searchText) {
            setData(null)
            setIsLoading(true)
            getPicture(searchText, 1)
                .then(response => response.json())
                .then((data) =>
                    setData(data.hits))
                .catch((error) => console.log(error))
                .finally(() =>
                    setIsLoading(false),
                    setPage(1))
        }
    }, [searchText])

    useEffect(() => {
        const prevData = data
        if (page > 1) {
            setIsLoading(true)
            getPicture(searchText, page)
                .then(response => response.json())
                .then((data) =>
                    setData([...prevData, ...data.hits]))
                .catch((error) => console.log(error))
                .finally(() =>
                    setIsLoading(false))}
    }, [page])
    
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
