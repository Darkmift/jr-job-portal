// scss
import styles from './AppHeader.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import AuthNavPanel from './AuthNavPanel';

// logo
import Logo from '@/assets/images/svg/kula-like.svg';
import SearchBar from '../common/SeacrhBar';

// router
import { Link, useNavigate } from 'react-router-dom';

function AppHeader(props) {
    const navigate = useNavigate();

    return (
        <header className={styles['app-header']}>
            <nav>
                <section>
                    <img
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                        src={Logo}
                        alt="kula like logo"
                    />
                    <ul>
                        <li>
                            <Link to="/about">אודות</Link>
                        </li>
                        <li>משרות עבודה</li>
                        <li>כתבות</li>
                        <li>הפורום</li>
                        <li>צור קשר</li>
                    </ul>
                    <SearchBar />
                </section>
                <section>
                    <AuthNavPanel />
                </section>
            </nav>
        </header>
    );
}

AppHeader.propTypes = {};

export default AppHeader;
