import styled from "styled-components/native";
import theme from "../../../styles/theme";

type ButtonCheckedProps = {
  background?: string;
}

export const Button = styled.TouchableOpacity<ButtonCheckedProps>`
background-color:${({background}) => background || theme.colors.gray200};
border-radius:5px;
`