import React from "react";
import Typograph from "../../atoms/Typograph";
import ButtonChecked from "../ButtonChecked";
import {Container, Select, Text} from "./styles";

interface ItemListSelectButtonProps{
  children: React.ReactNode
}

const ItemListSelectButton = ({children}: ItemListSelectButtonProps):JSX.Element => {
  return(
    <Container>
      <Select>
      <ButtonChecked check={true}/>
      </Select>
      <Typograph fontSize={20} children={children}/>
    </Container>
  )
}
export default ItemListSelectButton;