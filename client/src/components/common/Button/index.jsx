import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export const ButtonVariant = {
    FILLED: 'filled',
    OUTLINED: 'outlined',
    TEXT: 'text',
    ELEVATED: 'elevated',
    TONAL: 'tonal',
};

export const ButtonType = {
    BUTTON: 'button',
    SUBMIT: 'submit',
    RESET: 'reset',
};

const Button = ({
    variant = ButtonVariant.FILLED,
    label,
    small,
    disabled,
    onClick,
    inputType = ButtonType.BUTTON,
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
    variant: PropTypes.oneOf(Object.values(ButtonVariant)),
};

Button.defaultProps = {
    type: ButtonType.BUTTON,
    variant: ButtonVariant.FILLED,
    small: false,
    disabled: false,
};

export default Button;
