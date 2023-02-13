import { useRef } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as MenuOpen } from "../../assets/menuOpen.svg";
import { ReactComponent as MenuClose } from "../../assets/menuClose.svg";
import HeaderButton from "./HeaderButton";
import * as S from "./styles";

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  function abrirMenu() {
    menuRef.current?.classList.add("ativo");
  }
  function fecharMenu() {
    if (menuRef.current?.classList.contains("ativo")) {
      menuRef.current?.classList.remove("ativo");
    }
  }

  return (
    <S.Header>
      <S.HeaderBox ref={menuRef}>
        <Logo className="logo" />
        <span className="bgMobile"></span>
        <nav>
          <button
            className="btnHeader menuFechar"
            aria-label="Fechar Menu"
            aria-expanded="true"
            onClick={fecharMenu}
          >
            <MenuClose />
          </button>
          <S.Ul>
            <li>
              <a href="#baixar">Baixar</a>
            </li>
            <li>
              <a href="#planos">Planos</a>
            </li>
            <li>
              <HeaderButton finalidade="entrar" />
            </li>
            <li>
              <HeaderButton />
            </li>
          </S.Ul>
        </nav>
        <button
          className="btnHeader menuAbrir"
          aria-label="Abrir Menu"
          aria-expanded="false"
          onClick={abrirMenu}
        >
          <MenuOpen />
        </button>
      </S.HeaderBox>
    </S.Header>
  );
};

export default Header;
