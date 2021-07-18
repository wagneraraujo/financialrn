import React from "react";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserGreeting,
  UserName,
  Photo,
  User,
  Icon,
  HightlightCards
} from "./styles";

import { HightlightCard } from "../components/Highlithgtcard";
export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/2507007?v=4.ng"
              }}
            />

            <User>
              <UserGreeting>olá,</UserGreeting>
              <UserName>Wagner Araujo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HightlightCards
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 16
        }}
      >
        <HightlightCard />
        <HightlightCard />
        <HightlightCard />
      </HightlightCards>
    </Container>
  );
}
