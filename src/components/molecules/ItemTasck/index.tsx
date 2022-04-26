import React, { useState } from "react";
import theme from "../../../styles/theme";
import Typograph from "../../atoms/Typograph";
import ButtonChecked from "../ButtonChecked";
import {Container, Select} from "./styles";

interface ItemListSelectButtonProps{
  children: React.ReactNode;
  check: boolean;
}

const ItemTasck = ({children}: ItemListSelectButtonProps):JSX.Element => {
  const [check, setCheck] = useState(false);
  
  function handleCheck() {
    if(check == true){
    setCheck(false)
  }else{
    setCheck(true)
  }}

  return(
    <Container>
      <Select>
      <ButtonChecked check={check}/>
      </Select>
      <Typograph textDecoration={check ? 'line-through' : 'none'}  color={check ? theme.colors.gray300 : theme.colors.white} fontSize={20} children={children}/>
    </Container>
  )
}
export default ItemTasck;