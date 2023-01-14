import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.WHITE}
  `};
`;