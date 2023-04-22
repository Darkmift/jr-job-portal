import React from 'react';
import style from './SearchBar.module.scss';

import MagnifySvg from '@/assets/images/svg/magnify.svg';

const SearchBar = ({ onChange }) => {
    return (
        <div className={style['search-container']}>
            <img src={MagnifySvg} alt="icon search" />
            <input
                className={style['search-input']}
                type="text"
                placeholder="חיפוש"
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBar;
