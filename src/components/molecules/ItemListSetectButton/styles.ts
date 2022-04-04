import styled from "styled-components/native";
import theme from "../../../styles/theme";

export const Text = styled.Text`
font-size: 31px;
font-family: serif;
padding-left: 15px ;
`;

export const Container = styled.TouchableOpacity`
align-items: center;
justify-content: space-between ;
width: 97%;
height: 75px;
border-radius:10px;
flex-direction:row ;
background-color: ${theme.colors.gray250};
`;

export const ContainerContent = styled.View`
flex-direction:row ;
`;

export const Select = styled.View`
justify-content:center;
margin-left: 10px;
margin-right: 10px;
border-radius: 5px;
`
export const TimeContainer = styled.View`
flex-direction:row;
align-self: flex-end;
padding:10px;
`