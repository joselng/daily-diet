import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 6px;
`;

export const Counter = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE['3XL']};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `};
`;