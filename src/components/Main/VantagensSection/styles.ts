import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
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
    h2 {
      margin-bottom: 8.8rem;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
  justify-content: center;
  gap: 3rem;
`;

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  border-radius: 3.2rem;
  background: #f9fafb;
  border: 0.2rem solid #d400d6;

  h3 {
    font-size: clamp(1.8rem, 1.6957rem + 0.2899vw, 2rem);
    font-weight: 500;
    margin: 1.6rem 0 0.8rem;
  }

  p {
    max-width: 40rem;
    color: #4a4a4a;
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 900px) {
    text-align: center;

    svg,
    p {
      align-self: center;
    }
  }
`;
