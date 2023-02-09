import React from 'react'
import HeroImg from '../../assets/heroImg.webp'
import Button from '../Button'
import * as S from './styles'

const Main = () => {
  return (
    <main>
      <S.HeroSection>
        <S.HeroBox>
          <S.HeroContent>
            <h1>Escute suas <span>músicas</span> favoritas.</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ultrices sed netus proin in pulvinar elit.</p>
            <Button text="Iniciar Teste Grátis" />
          </S.HeroContent>
          <img src={HeroImg} alt="" />
        </S.HeroBox>
      </S.HeroSection>
        
    </main>
  )
}

export default Main