import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { 
  Container,
  Header,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon
} from './styles';

export function Dashboard(){
    return (
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/86992122?v=4' }}/>
              <User>
                <UserGreeting>Olá, </UserGreeting>
                <UserName>Juliano</UserName>
              </User>
            </UserInfo>
            <Icon name="power" />
          </UserWrapper>
          <HighlightCard />
        </Header>
      </Container>
    )
}

