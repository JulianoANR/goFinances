import React from 'react';
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

export function HighlightCard(){
    return (
      <Container>
        <Header>
            <Title>entrada</Title>
            <Icon name="arrow-up-circle" />
        </Header>
        <Footer>
            <Amount>351</Amount>
            <LastTransaction>ghfgjhgju</LastTransaction>
        </Footer>
      </Container>
    )
}
