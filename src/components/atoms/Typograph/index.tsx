
 import React from 'react';
 import {Text} from './styles'

interface typographProps {
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  weight?: number;
  children: React.ReactNode
}
 
const Typograph = ({children, fontFamily, fontSize, weight, color}: typographProps): JSX.Element => {
   return (
      <Text fontFamily={fontFamily} fontSize={fontSize} weight={weight} color={color}>
      {children}
      </Text>
   );
 }
 
 export default Typograph
