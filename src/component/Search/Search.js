import React from 'react';
import s from './Search.module.css'


const Search = () => {
    return (
        <div className={s.search}>

                <input name="search"   type="search"/>

            <img alt='df' src="https://img.icons8.com/small/32/4a90e2/filled-bookmark-ribbon.png"/>
            <img alt='df' src="https://img.icons8.com/small/32/4a90e2/download-2.png"/>
            <img alt='df' src="https://img.icons8.com/small/32/4a90e2/refresh.png"/>
        </div>

    )
}
export default Search;