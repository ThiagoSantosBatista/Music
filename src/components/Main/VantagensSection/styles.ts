import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto 12rem;
  padding: 0 16rem;
  max-width: 144rem;

  h2 {
    margin-bottom: 10.4rem;
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

export const Card = styled.li`
  position: relative;
  padding: 3.2rem;
  max-width: 35.2rem;
  border-radius: 3.2rem;
  background: #f9fafb;

  &::after {
    content: "";
    position: absolute;
    inset: -0.1rem;
    background: linear-gradient(to right top, #fc00ff, #00dbde);
    border-radius: inherit;
    z-index: -1;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin: 1.6rem 0 0.8rem;
  }

  p {
    color: #4a4a4a;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;;
  }
`;
