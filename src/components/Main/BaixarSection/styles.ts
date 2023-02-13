import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 7.2rem;
  margin: 0 auto;
  padding: 12rem 16rem;
  max-width: 144rem;

  img {
    width: 21.2rem;
    height: auto;
  }

  @media screen and (max-width: 1440px) {
    padding: 12rem 9%;
  }
  @media screen and (max-width: 1200px) {
    padding: 12rem 5%;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: auto;
    justify-content: center;
    text-align: center;
    img {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10.4rem 5%;
  }
`;

export const ContentDiv = styled.div`
  max-width: 70rem;
  h2 {
    margin-bottom: 1.6rem;
    font-size: clamp(2.4rem, 2.1081rem + 0.8108vw, 3rem);
    font-weight: 600;
    line-height: 1.2;
  }
  p {
    margin-bottom: 4.8rem;
    color: #4a4a4a;
    font-size: clamp(1.6rem, 1.4054rem + 0.5405vw, 2rem);
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 850px) {
    max-width: 60rem;
  }
`;
