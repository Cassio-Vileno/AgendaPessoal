import styled from "styled-components/native";
import theme from "../../../styles/theme";

export const Text = styled.Text`
font-size: 31px;
font-family: serif;
padding-left: 15px ;
`;

export const Container = styled.TouchableOpacity`
align-items: center ;
width: 97%;
height: 75px;
border-radius:10px;
flex-direction:row ;
background-color: ${theme.colors.gray250};
`;

export const Select = styled.View`
background-color: ${theme.colors.gray300};
margin-left: 10px;
margin-right: 12px;
border-radius: 5px;
padding: 1px;
`