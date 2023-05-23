import React from "react";
import css from './Loader.module.css'


export const Loader = () => {
    return (
        <div className={css.spinner}>
            <span className={css.spinnerText}>Loading...</span>
        </div>
    )
}

