import React from "react";
import Typograph from "../../atoms/Typograph";
import { Container, BodyContainer, DateContainer } from "./styles";

const ItemListTask = (): JSX.Element =>{
  return(
    <Container>
      <DateContainer>
      <Typograph fontSize={20} children={'24/03/2022'}/>
      </DateContainer>
      <BodyContainer>
        <Typograph children={'cassio'}/>
        <Typograph children={'cassio'}/>
        <Typograph children={'cassio'}/>
      </BodyContainer>

    </Container>
  )
} 
export default ItemListTask;