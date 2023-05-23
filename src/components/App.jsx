import React, {useState} from "react";
import { ToastContainer } from 'react-toastify';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Searchbar} from './Searchbar/Searchbar';
import css from '../components/Searchbar/Searchbar.module.css'


export const App = ()=> {
  const [searchText, setSearchText]=useState('')

  const handleSearch = (searchText) => {
    setSearchText(searchText)
  }

    return (
      <div className={css.App}>
        <Searchbar handleSearch={handleSearch}/>
        <ToastContainer/>
        <ImageGallery searchText={searchText}/>
      </div> 
    );
  }

