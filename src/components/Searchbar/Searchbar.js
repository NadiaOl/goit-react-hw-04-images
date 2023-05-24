import React, {useState} from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import css from './Searchbar.module.css';
import PropTypes from "prop-types";

export const Searchbar = ({handleSearch, setPage}) => {
    const[value, setValue] = useState('')

const handleChange = ({target:{value}}) => {
    setValue(value)
}
const handleSubmit = (e) => {
    e.preventDefault()
    if(value.trim(" ") === "") {
        toast.warn("Enter a search term, please!");
        return
    }
    handleSearch(value)
    setPage(1)
}


        return (
            <div>
                <header className={css.Searchbar}>
                    <form className={css.SearchForm} onSubmit={handleSubmit}>
                        <button type="submit" className={css.SearchFormButton}>
                            <BsSearch/>
                            <span className={css.SearchFormButtonLabel}>Search</span>
                        </button>
                        <input
                            className={css.SearchFormInput}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onChange={handleChange}
                            value={value}
                            />
                    </form>
                </header>
            </div>
        );
    
}

Searchbar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}