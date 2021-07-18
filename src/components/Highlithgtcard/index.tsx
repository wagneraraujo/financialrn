import React from "react";
import {
  Container,
  Header,
  Title,
  Footer,
  Amount,
  LastTransaction,
  Icon
} from "./styles";

export function HightlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 17.000,00</Amount>
        <LastTransaction>última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  );
}
