import styled from "styled-components";

export const Section = styled.section`
  background-color: #090909;
`;

export const SectionBox = styled.section`
  position: relative;
  margin: 0 auto 12rem;
  padding: 10.4rem 16rem;
  max-width: 144rem;
  color: #ffffff;
  background-color: #090909;

  header {
    position: relative;
    z-index: 2;
  }
  h2 {
    margin-bottom: 10.4rem;
    font-size: clamp(2.4rem, 2.1081rem + 0.8108vw, 3rem);
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
  }
  .efeito {
    position: absolute;
    left: 50%;
    bottom: 0;
    filter: blur(8rem);
    transform: translateX(-70%);
  }
  .efeito2 {
    position: absolute;
    top: 0;
    left: -11.5rem;
    filter: blur(8rem);
  }
  .efeito3 {
    position: absolute;
    top: 50%;
    right: -11.5rem;
    filter: blur(8rem);
    transform: translateY(-60%);
  }

  @media screen and (max-width: 1440px) {
    padding: 10.4rem 9%;
  }
  @media screen and (max-width: 1200px) {
    padding: 10.4rem 5%;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto 10.4rem;

    h2 {
      margin-bottom: 8.8rem;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 35.2rem));
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
`;

export const Card = styled.li`
  position: relative;
  min-height: 44rem;
  padding: 3rem;
  border-radius: 3.2rem;
  border: 0.2rem solid #5f5f5f;
  background-color: #090909;
  z-index: 2;
  h3 {
    margin-bottom: 2.4rem;
    font-size: clamp(2rem, 1.8054rem + 0.5405vw, 2.4rem);
    font-weight: 600;
    text-align: center;
  }
  .linha {
    display: block;
    height: 0.1rem;
    width: 100%;
    margin-bottom: 2.6rem;
    background-color: #ffffff;
  }
  p {
    text-align: center;
    margin-bottom: 1.6rem;
    font-size: clamp(1.6rem, 1.5027rem + 0.2703vw, 1.8rem);
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
  }
  button {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CardRoxo = styled(Card)`
  min-height: 50rem;
  border-color: #d400d6;
  background-color: #ab00ad;

  @media screen and (max-width: 1370px) {
    min-height: 44rem;
  }
`;

export const CardItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1rem;
  color: #f3f4f6;
  font-size: 1.6rem;
  line-height: 1.5;

  svg {
    min-width: 2.2rem;
  }
`;
