import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background-color: #090909;
`;

export const FooterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 144rem;
  padding: 3.2rem 16rem;
  margin: 0 auto;

  a {
    color: #f3f4f6;
    font-size: 1.4rem;
    line-height: 1.5;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  &.redes{
    gap: 1.6rem;
  }
`;