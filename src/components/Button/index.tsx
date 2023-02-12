import React from "react";
import * as S from "./styles";

interface ButtonProps {
  text: string;
  color?: string;
  background?: string;
}

const Button = ({ text, background, color }: ButtonProps) => {
  return (
    <S.Button background={background} color={color}>
      {text}
    </S.Button>
  );
};

export default Button;
