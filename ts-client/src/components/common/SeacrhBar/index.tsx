// SearchBar.tsx
import style from './SearchBar.module.scss';
import { FC, ChangeEvent } from 'react';

import MagnifySvg from '@/assets/images/svg/magnify.svg';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: FC<Props> = ({ onChange }) => {
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
