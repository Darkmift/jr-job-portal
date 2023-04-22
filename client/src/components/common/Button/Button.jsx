import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export const ButtonType = {
    FILLED: 'filled',
    OUTLINED: 'outlined',
    TEXT: 'text',
    ELEVATED: 'elevated',
    TONAL: 'tonal',
    LINK: 'link',
};

export const ButtonInputType = {
    BUTTON: 'button',
    SUBMIT: 'submit',
    RESET: 'reset',
};

const Button = ({
    variant = ButtonType.FILLED,
    label,
    small,
    disabled,
    onClick,
    inputType = ButtonInputType.BUTTON,
}) => (
    <button
        onClick={onClick}
        className={`${styles.btn} ${styles[variant]} ${
            small ? styles.small : ''
        }`}
        disabled={disabled}
        variant={variant}
        type={inputType}
    >
        {label}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(ButtonType)),
};

Button.defaultProps = {
    type: ButtonInputType.BUTTON,
    small: false,
    disabled: false,
};

export default Button;
