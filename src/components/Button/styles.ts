import styled from "styled-components";

interface ButtonProps {
  color?: string;
  background?: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 1.4rem 2.8rem;
  border: none;
  border-radius: 3.2rem;
  color: ${(props) => props.color ? props.color : '#f9fafb'};
  background-color: ${(props) => props.background ? props.background : '#090909'};
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
