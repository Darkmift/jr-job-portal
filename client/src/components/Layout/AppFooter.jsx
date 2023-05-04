// styles
import styles from './AppFooter.module.scss';

import React from 'react';
import PropTypes from 'prop-types';

// logo
import Logo from '@/assets/images/svg/kula-like-white.svg';
import LinkedInIcon from '@/assets/images/svg/linkedin-bottom.svg';

function AppFooter(props) {
    return (
        <div className={styles['app-footer']}>
            <section className={styles['footer-nav']}>
                <img
                    src={Logo}
                    alt="kula like logo"
                />
                <ul>
                    <li>אודות</li>
                    <li>משרות עבודה</li>
                    <li>כתבות</li>
                    <li>הפורום</li>
                    <li>צור קשר</li>
                    <li>
                        <img
                            src={LinkedInIcon}
                            alt="linkedIn Icon"
                        />
                    </li>
                </ul>
            </section>
            <section className={styles['footer-credit']}>
                <p>האתר נוצר ע"י כולא לייק</p>
            </section>
        </div>
    );
}

AppFooter.propTypes = {};

export default AppFooter;
