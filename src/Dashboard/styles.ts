import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  height: ${RFPercentage(42)}px;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;
export const UserInfo = styled.View``;
export const User = styled.View``;
export const UserGreeting = styled.Text``;
export const UserName = styled.Text``;
