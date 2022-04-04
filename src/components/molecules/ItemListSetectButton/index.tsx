import React, { useState } from "react";
import theme from "../../../styles/theme";
import Typograph from "../../atoms/Typograph";
import ButtonChecked from "../ButtonChecked";
import {Container, ContainerContent, Select, Text, TimeContainer} from "./styles";

interface ItemListSelectButtonProps{
  children: React.ReactNode;
  start: string;
  end: string;
}

const ItemListSelectButton = ({children, start, end}: ItemListSelectButtonProps):JSX.Element => {
  const [check, setCheck] = useState(false);
  
  function handleCheck() {
    if(check == true){
    setCheck(false)
  }else{
    setCheck(true)}
  }

  return(
    <Container onPress={() => handleCheck()}>
      <ContainerContent>
      <Select>
      <ButtonChecked check={check}/>
      </Select>
      <Typograph textDecoration={check ? 'line-through' : 'none'}  color={check ? theme.colors.gray300 : theme.colors.white} fontSize={20} children={children}/>
      </ContainerContent>
      <TimeContainer>
      <Typograph color={theme.colors.gray300} children={start}/>
      <Typograph color={theme.colors.gray300} children={' as '}/>
      <Typograph color={theme.colors.gray300} children={end}/>
      </TimeContainer>
    </Container>
  )
}
export default ItemListSelectButton;