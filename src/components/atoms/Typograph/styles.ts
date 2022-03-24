import styled from 'styled-components/native'
import theme from '../../../styles/theme';


type TextProps = {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  weight?: number;
};

export const Text = styled.Text<TextProps>`
  font-size: ${({ fontSize }) => fontSize || theme.font.size}px;
  font-family: ${({ fontFamily }) => fontFamily || theme.font.family};
  color: ${({ color }) => color || theme.font.color};
  font-weight: ${props => props.weight || 500};
`;
