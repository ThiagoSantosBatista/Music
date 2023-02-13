import React from "react";
import * as S from "./styles";

const FaqItems = [
  {
    key: 1,
    titulo:
      "Lorem ipsum dolor sit amet consectetur. Id turpis sapien habitant cursus?",
    descricao:
      "Lorem ipsum dolor sit amet consectetur. Placerat adipiscing nam turpis tellus suscipit arcu posuere quis tortor. Neque felis mattis mi sed id tincidunt. Nisi orci sodales cras dolor eu turpis neque purus fusce. Nunc maecenas congue lorem dolor euismod lectus eget et in. Sed faucibus sem egestas amet ut.",
  },
  {
    key: 2,
    titulo: "Lorem ipsum dolor sit amet consectetur",
    descricao:
      "Lorem ipsum dolor sit amet consectetur. Placerat adipiscing nam turpis tellus suscipit arcu posuere quis tortor. Neque felis mattis mi sed id tincidunt. Nisi orci sodales cras dolor eu turpis neque purus fusce. Nunc maecenas congue lorem dolor euismod lectus eget et in. Sed faucibus sem egestas amet ut.",
  },
  {
    key: 3,
    titulo:
      "Lorem ipsum dolor sit amet consectetur. Id turpis sapien habitant cursus?",
    descricao:
      "Lorem ipsum dolor sit amet consectetur. Placerat adipiscing nam turpis tellus suscipit arcu posuere quis tortor. Neque felis mattis mi sed id tincidunt. Nisi orci sodales cras dolor eu turpis neque purus fusce. Nunc maecenas congue lorem dolor euismod lectus eget et in. Sed faucibus sem egestas amet ut.",
  },
  {
    key: 4,
    titulo: "Lorem ipsum dolor sit amet consectetur",
    descricao:
      "Lorem ipsum dolor sit amet consectetur. Placerat adipiscing nam turpis tellus suscipit arcu posuere quis tortor. Neque felis mattis mi sed id tincidunt. Nisi orci sodales cras dolor eu turpis neque purus fusce. Nunc maecenas congue lorem dolor euismod lectus eget et in. Sed faucibus sem egestas amet ut.",
  },
];

const FAQSection = () => {
  return (
    <S.Section>
      <header>
        <h2>Perguntas frequentes.</h2>
      </header>
      {FaqItems.map(({ key, titulo, descricao }) => (
        <S.Details key={key}>
          <S.Summary>{titulo}</S.Summary>
          <p>{descricao}</p>
        </S.Details>
      ))}
    </S.Section>
  );
};

export default FAQSection;
