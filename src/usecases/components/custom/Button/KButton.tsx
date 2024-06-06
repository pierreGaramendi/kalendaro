import React from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'normal' | 'disabled' | 'clear' | 'outline' | 'solid';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const buttonVariants = {
  normal: css`
    background: var(--color-primary);
    color: white;
    border: none;
    &:hover {
      background: var(--color-primary-light);
    }
  `,
  disabled: css`
    background: #6c757d;
    color: white;
    border: none;
    cursor: not-allowed;
  `,
  clear: css`
    background: transparent;
    color: #007bff;
    border: none;
    &:hover {
      background: #e9ecef;
    }
  `,
  outline: css`
    background: transparent;
    color: #007bff;
    border: 2px solid #007bff;
    &:hover {
      background: #e9ecef;
    }
  `,
  solid: css`
    background: #007bff;
    color: white;
    border: none;
    &:hover {
      background: #0056b3;
    }
  `,
};

const StyledButton = styled.button<{ variant: ButtonVariant; fullWidth: boolean }>`
  padding: 9px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: transform 0.1s ease-in-out;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  ${({ variant }) => buttonVariants[variant] || buttonVariants.normal}
  &:not([disabled]):active {
    transform: scale(0.95);
  }
`;

StyledButton.defaultProps = {
  variant: 'normal',
  fullWidth: false,
};

export const KButton: React.FC<ButtonProps> = ({ variant = 'normal', fullWidth = false, ...props }) => {
  return <StyledButton variant={variant} fullWidth={fullWidth} {...props} />;
};
