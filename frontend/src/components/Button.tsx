import React from "react";
import styled from "@emotion/styled";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ type = "button", onClick, children }: ButtonAttributes) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 6px;

  font-size: 16px;
  font-weight: 600;
`;

export default Button;
