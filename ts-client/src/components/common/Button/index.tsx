// Button.tsx
import { FC } from 'react';
import styles from './Button.module.scss';

export enum ButtonVariant {
  FILLED = 'filled',
  OUTLINED = 'outlined',
  TEXT = 'text',
  ELEVATED = 'elevated',
  TONAL = 'tonal',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

type Props = {
  variant?: ButtonVariant;
  label: string;
  small?: boolean;
  disabled?: boolean;
  onClick: () => void;
  inputType?: ButtonType;
};

const Button: FC<Props> = ({
  variant = ButtonVariant.FILLED,
  label,
  small = false,
  disabled = false,
  onClick,
  inputType = ButtonType.BUTTON,
}) => (
  <button
    onClick={onClick}
    className={`${styles.btn} ${styles[variant]} ${small ? styles.small : ''}`}
    disabled={disabled}
    type={inputType}
  >
    {label}
  </button>
);

export default Button;
