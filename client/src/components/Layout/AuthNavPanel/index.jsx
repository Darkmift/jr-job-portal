// styles
import styles from './AuthNavPanel.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';

function AuthNavPanel(props) {
    const isLoggedIn = false; //placeholder for logic

    const clickHandler = e => {};

    return isLoggedIn ? (
        <>TODO add logged in panel</>
    ) : (
        <div className={styles['auth-nav-panel']}>
            <Button
                onClick={clickHandler}
                label={'להרשמה'}
            />
            <Button
                onClick={clickHandler}
                variant="text"
                label={'להתחברות'}
            />
        </div>
    );
}

AuthNavPanel.propTypes = {};

export default AuthNavPanel;
