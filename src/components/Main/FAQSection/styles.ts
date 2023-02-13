import styled from "styled-components";
import ArrowOpen from "../../../assets/arrowOpen.svg";
import ArrowClose from "../../../assets/arrowClose.svg";

export const Section = styled.section`
  margin: 0 auto 12rem;
  padding: 0 16rem;
  max-width: 144rem;

  h2 {
    margin-bottom: 10.4rem;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
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
  margin-bottom: 3rem;
  font-size: 2rem;
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
