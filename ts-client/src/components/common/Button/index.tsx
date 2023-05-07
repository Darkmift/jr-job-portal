// Button.tsx
import { FC } from 'react';
import styles from './Button.module.scss';

export const ButtonVariant = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
  TEXT: 'text',
  ELEVATED: 'elevated',
  TONAL: 'tonal',
} as const;

export const ButtonType = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
} as const;

type Props = {
  variant?: keyof typeof ButtonVariant;
  label: string;
  small?: boolean;
  disabled?: boolean;
  onClick: () => void;
  inputType?: keyof typeof ButtonType;
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
    type={inputType as 'button'} //pesky ts bs to fix later
  >
    {label}
  </button>
);

export default Button;
