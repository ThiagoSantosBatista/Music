import React from "react";
import HeroImg from '../../../assets/heroImg.webp'
import Button from '../../Button'
import * as S from './styles'

const HeroSection = () => {
  return (
    <S.Section>
      <S.Box>
        <S.Content>
          <h1>
            Escute suas <span>músicas</span> favoritas.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem ultrices sed netus
            proin in pulvinar elit.
          </p>
          <Button text="Iniciar Teste Grátis" />
        </S.Content>
        <img src={HeroImg} alt="" />
      </S.Box>
    </S.Section>
  );
};

export default HeroSection;
