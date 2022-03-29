import React from "react";
import theme from "../../../styles/theme";
import Icon from "../../atoms/icon";
import { Button } from "./styles";

interface buttonIconProps {
  onPress:()=> void 
}

const ButtonIcon = ({onPress}: buttonIconProps):JSX.Element => {
  return(
    <Button onPress={onPress}>
      <Icon name="plus" color={theme.colors.black} size={30}/>
    </Button>
  )
}
export default ButtonIcon