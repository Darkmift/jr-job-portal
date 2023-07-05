// styles
import styles from './AuthNavPanel.module.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

function AuthNavPanel(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isLoggedIn = false; //placeholder for logic

    const clickHandler = e => {
        setIsModalOpen(true);
    };

    return isLoggedIn ? (
        <React.Fragment>TODO add logged in panel</React.Fragment>
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
            <Modal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                xSign={true}
            >
                <div>הרשמה</div>
            </Modal>
        </div>
    );
}

AuthNavPanel.propTypes = {};

export default AuthNavPanel;
