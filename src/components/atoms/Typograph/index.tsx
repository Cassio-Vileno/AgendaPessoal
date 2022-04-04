
 import React from 'react';
 import {Text} from './styles'

interface typographProps {
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  weight?: number;
  textDecoration?: string
  children: React.ReactNode
}
 
const Typograph = ({children, fontFamily, fontSize, weight, color, textDecoration}: typographProps): JSX.Element => {
   return (
      <Text textDecoration={textDecoration} fontFamily={fontFamily} fontSize={fontSize} weight={weight} color={color}>
      {children}
      </Text>
   );
 }
 
 export default Typograph
