import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export const ButtonType = {
    FILLED: 'filled',
    OUTLINED: 'outlined',
    TEXT: 'text',
    ELEVATED: 'elevated',
    TONAL: 'tonal',
};

export const ButtonInputType = {
    BUTTON: 'button',
    SUBMIT: 'submit',
    RESET: 'reset',
};

const Button = ({ type, label, small, disabled, onClick, inputType }) => (
    <button
        onClick={onClick}
        className={`${styles.btn} ${styles[type]} ${small ? styles.small : ''}`}
        disabled={disabled}
        type={inputType || ButtonInputType.BUTTON}
    >
        {label}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(ButtonType))
};

Button.defaultProps = {
    type: ButtonType.FILLED,
    small: false,
    disabled: false,
};

export default Button;
