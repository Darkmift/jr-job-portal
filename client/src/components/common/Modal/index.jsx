import { Children } from 'react';
import style from './Modal.module.scss';
import ReactDom from 'react-dom';

const Modal = ({ children, open }) => {
    if (!open) return null;
    return ReactDom.createPortal(
        <div className={style.modalContainer}>
            <div className={style.modalPopup}>{children}</div>
        </div>,
        document.getElementById('portal')
    );
};

export default Modal;
