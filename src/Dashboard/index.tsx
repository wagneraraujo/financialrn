import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  Header,
  UserInfo,
  UserGreeting,
  UserName,
  Photo,
  User
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <Photo
            source={{
              uri: "https://avatars.githubusercontent.com/u/2507007?v=4.ng"
            }}
          />

          <User>
            <UserGreeting>olá,</UserGreeting>
            <UserName>Wagner</UserName>
          </User>
        </UserInfo>
      </Header>
    </Container>
  );
}
