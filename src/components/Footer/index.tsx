import React from "react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterBox>
        <S.List>
          <li>
            <a href="#home">Política de privacidade</a>
          </li>
          <li>
            <a href="#home">Termos de uso</a>
          </li>
          <li>
            <a href="#home">Contato</a>
          </li>
        </S.List>
        <S.List className="redes">
          <li>
            <a href="#home" aria-label="Link para o Facebook">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="#home" aria-label="Link para o Instagram">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="#home" aria-label="Link para o Twitter">
              <Twitter />
            </a>
          </li>
        </S.List>
      </S.FooterBox>
    </S.Footer>
  );
};

export default Footer;
