import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 60rem;
  margin-bottom: 12rem;
  background: linear-gradient(to right top, #fc00ff, #00dbde);
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 16rem;
  max-width: 144rem;
  color: #f9fafb;

  img {
    height: 60rem;
    width: auto;
  }
`;

export const Content = styled.div`
  max-width: 52rem;
  h1 {
    margin-bottom: 2.4rem;
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 1.2;
  }
  p {
    margin-bottom: 6.4rem;
    color: #f3f4f6;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5;
  }

  span {
    color: #090909;
    font-weight: 600;
  }
`;
