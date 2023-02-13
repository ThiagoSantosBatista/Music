import React from "react";
import { ReactComponent as Person } from "../../../assets/person.svg";
import * as S from "./styles";

interface HeaderButtonProps {
  finalidade?: string;
}

const HeaderButton = ({ finalidade }: HeaderButtonProps) => {
  {
    if (finalidade === "entrar") {
      return (
        <S.EntrarBtn href="#entrar">
          <Person /> Entrar
        </S.EntrarBtn>
      );
    }
  }
  return <S.CadastrarBtn href="#cadastrar">Cadastre-se</S.CadastrarBtn>;
};

export default HeaderButton;
