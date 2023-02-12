import React from "react";
import { ReactComponent as CheckSvg } from "../../../assets/check.svg";
import { ReactComponent as Bola } from "../../../assets/bola.svg";
import { ReactComponent as Bola2 } from "../../../assets/bola2.svg";
import { ReactComponent as Bola3 } from "../../../assets/bola3.svg";
import Button from "../../Button";
import * as S from "./styles";

const PlanosSection = () => {
  return (
    <S.Section>
      <S.SectionBox>
        <Bola className="efeito" />
        <Bola2 className="efeito2" />
        <Bola3 className="efeito3" />
        <h2>Escolha o plano ideal para você.</h2>
        <S.List>
          <S.Card>
            <h3>Individual</h3>
            <p>1 mês grátis e depois R$ 09,90/mês</p>
            <span className="linha"></span>
            <ul>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit
              </S.CardItem>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit amet consectetur.
              </S.CardItem>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit
              </S.CardItem>
            </ul>
            <Button text="Começar" background='#4A4A4A' color="#FFFFFF" />
          </S.Card>
          <S.CardRoxo>
            <h3>Duo</h3>
            <p>1 mês grátis e depois R$ 19,90/mês</p>
            <span className="linha"></span>
            <ul>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit
              </S.CardItem>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit amet consectetur.
              </S.CardItem>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit
              </S.CardItem>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit
              </S.CardItem>
            </ul>
            <Button text="Começar" background='#F9FAFB' color="#090909" />
          </S.CardRoxo>
          <S.Card>
            <h3>Família</h3>
            <p>1 mês grátis e depois R$ 39,90/mês</p>
            <span className="linha"></span>
            <ul>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit
              </S.CardItem>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit amet consectetur.
              </S.CardItem>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit
              </S.CardItem>
              <S.CardItem>
                <CheckSvg /> Lorem ipsum dolor sit
              </S.CardItem>
            </ul>
            <Button text="Começar" background='#4A4A4A' color="#FFFFFF" />
          </S.Card>
        </S.List>
      </S.SectionBox>
    </S.Section>
  );
};

export default PlanosSection;
