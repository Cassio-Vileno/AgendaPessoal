
 import React, { useState } from 'react';
import theme from '../../../styles/theme';
import Icon from '../../atoms/icon';
import { Button } from './styles';

interface buttonCheckedProps {
  check?: boolean;
}
 
const ButtonChecked = ({check}: buttonCheckedProps): JSX.Element => {
   return (
      <Button background={ check ? theme.colors.success : theme.colors.gray200 }>
        <Icon name='check' color={theme.colors.white} size={20}/>
      </Button>
   );
 }
 
 export default ButtonChecked
