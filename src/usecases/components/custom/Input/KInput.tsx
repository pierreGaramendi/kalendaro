import React from 'react';
import styled, { css } from 'styled-components';

interface StyledInputProps {
  fullWidth?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  ${({ className }) => className};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, StyledInputProps {}

export const KInput: React.FC<InputProps> = ({ fullWidth, ...props }) => {
  return <StyledInput className={props.className} fullWidth={fullWidth} {...props} />;
};