import styled from "styled-components";
import ArrowOpen from "../../../assets/arrowOpen.svg";
import ArrowClose from "../../../assets/arrowClose.svg";

export const Section = styled.section`
  margin: 0 auto 12rem;
  padding: 0 16rem;
  max-width: 144rem;

  h2 {
    margin-bottom: 10.4rem;
    font-size: clamp(2.4rem, 2.1081rem + 0.8108vw, 3rem);
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
  }

  @media screen and (max-width: 1440px) {
    padding: 0 9%;
  }
  @media screen and (max-width: 1200px) {
    padding: 0 5%;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto 10.4rem;

    h2 {
      margin-bottom: 8.8rem;
    }
  }
`;

export const Details = styled.details`
  margin-bottom: 3rem;
  border-bottom: 0.1rem solid #090909;
  p {
    max-width: 92.8rem;
    margin-bottom: 3rem;
    color: #4a4a4a;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
  }

  &[open] summary {
    margin-bottom: 1.6rem;

    &::after {
      background-image: url(${ArrowClose});
    }
  }
`;

export const Summary = styled.summary`
  position: relative;
  padding-right: 6rem;
  margin-bottom: 3rem;
  font-size: clamp(1.8rem, 1.6957rem + 0.2899vw, 2rem);
  font-weight: 500;
  list-style: none;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    background-image: url(${ArrowOpen});
  }
`;
