import styled, { css } from "styled-components/native";

interface StylesProps {
  isIcon: boolean;
}

export const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.TextInput<StylesProps>`
  ${({ isIcon }) => css`
    border: 1px solid #d1d1d1;
    padding: 8px 8px 8px ${isIcon ? "42px" : "8px"};
    border-radius: 8px;
    height: 44px;
    font-size: 16px;
  `}
`;

export const Label = styled.Text`
  font-size: 14px;
`;

export const ContentInput = styled.View`
  position: relative;
`;
export const PositionIcon = styled.View`
  position: absolute;
  top: 10px;
  left: 10px;
`;
