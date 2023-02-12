import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 7.2rem;
  margin: 0 auto 12rem;
  padding: 0 16rem;
  max-width: 144rem;

  img {
    width: 21.2rem;
    height: auto;
  }
`;

export const ContentDiv = styled.div`
  max-width: 70rem;
  h2 {
    margin-bottom: 1.6rem;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.2;
  }
  p {
    margin-bottom: 4.8rem;
    color: #4a4a4a;
    font-size: 2rem;
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
  }
`;
