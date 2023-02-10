import React from "react";
import { ReactComponent as WifiSvg} from '../../../assets/wifi.svg'
import { ReactComponent as SomSvg} from '../../../assets/som.svg'
import { ReactComponent as SemAnuncioSvg} from '../../../assets/bloqueio.svg'
import * as S from './styles'

const VantagensSection = () => {
  return (
    <S.Section>
      <header>
        <h2>Por que escolher o Music?</h2>
      </header>
      <S.List>
        <S.Card>
          <WifiSvg />
          <h3>Modo Offline</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus pharetra fames mattis
            porttitor blandit.
          </p>
        </S.Card>
        <S.Card>
          <SomSvg />
          <h3>Som de Alta Qualidade</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus pharetra fames mattis
            porttitor blandit.
          </p>
        </S.Card>
        <S.Card>
          <SemAnuncioSvg />
          <h3>Sem Anúncios</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus pharetra fames mattis
            porttitor blandit.
          </p>
        </S.Card>
      </S.List>
    </S.Section>
  );
};

export default VantagensSection;
