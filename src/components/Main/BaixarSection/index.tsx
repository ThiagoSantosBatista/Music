import React from "react";
import Button from "../../Button";
import CelularImg from '../../../assets/celular.webp'
import * as S from "./styles";

const BaixarSection = () => {
  return (
    <S.Section>
      <img src={CelularImg} alt="Celular" />
      <S.ContentDiv>
        <h2>O melhor aplicativo para escutar música no seu dispositivo.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Commodo imperdiet fringilla
          purus nibh odio lobortis. Sed volutpat purus odio netus scelerisque
          magna faucibus. Lorem ipsum dolor sit amet consectetur.
        </p>
        <Button text="Baixar Agora" />
      </S.ContentDiv>
    </S.Section>
  );
};

export default BaixarSection;
