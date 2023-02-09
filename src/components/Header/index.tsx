import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import HeaderButton from "./HeaderButton";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderBox>
        <Logo />
        <S.Ul>
          <li>
            <a href="">Baixar</a>
          </li>
          <li>
            <a href="">Planos</a>
          </li>
          <li>
            <HeaderButton finalidade="entrar" />
          </li>
          <li>
            <HeaderButton />
          </li>
        </S.Ul>
      </S.HeaderBox>
    </S.Header>
  );
};

export default Header;
