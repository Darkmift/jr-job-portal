import { Children } from 'react';
import style from './Modal.module.scss';
import xIconVector from '../../../assets/images/svg/x-symbol.svg';
import ReactDom from 'react-dom';

import PropTypes from 'prop-types';

const Modal = ({ children, isOpen, setIsOpen, xSign }) => {
    if (!isOpen) return null;
    return ReactDom.createPortal(
        <div className={style.modalContainer}>
            <div className={style.modalPopup}>
                <div
                    className={style.exitButtonDiv}
                    onClick={() => setIsOpen(false)}
                >
                    {xSign && (
                        <img
                            src={xIconVector}
                            alt={'exit button'}
                        />
                    )}
                </div>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default Modal;
