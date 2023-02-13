import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 60rem;
  margin: 7rem 0 12rem;
  background: linear-gradient(to right top, #fc00ff, #00dbde);

  @media screen and (max-width: 768px) {
    margin-bottom: 10.4rem;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  padding: 0 16rem;
  max-width: 144rem;
  color: #f9fafb;

  img {
    align-self: end;
    max-height: 60rem;
    width: auto;
  }

  @media screen and (max-width: 1440px) {
    padding: 0 9%;
  }
  @media screen and (max-width: 1200px) {
    padding: 0 5%;
  }
  @media screen and (max-width: 1000px) {
    justify-content: center;
    text-align: center;

    img {
      display: none;
    }
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
    font-size: clamp(1.6rem, 1.4054rem + 0.5405vw, 2rem);
    font-weight: 500;
    line-height: 1.5;
  }

  span {
    color: #090909;
    font-weight: 600;
  }
  @media screen and (max-width: 1050px) {
    h1 {
      font-size: clamp(3.2rem, 2.6783rem + 1.4493vw, 4.2rem);
    }
  }
  @media screen and (max-width: 1000px) {
    max-width: 46rem;
  }
`;
