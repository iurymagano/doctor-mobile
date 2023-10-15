import * as Styled from "./styles";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  isIcon?: boolean;
  type?: string;
  icon?: {
    name?: "search";
    size?: number;
    color?: string;
  };
}

function Input({ label, isIcon = false, icon, type, ...props }: InputProps) {
  return (
    <Styled.Wrapper>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.ContentInput>
        <Styled.PositionIcon>
          {isIcon && (
            <Feather
              name={icon?.name}
              size={icon?.size || 24}
              color={icon?.color || "#d3d3d3"}
            />
          )}
        </Styled.PositionIcon>
        <Styled.Input
          isIcon={isIcon}
          placeholderTextColor={"#7B8794"}
          {...props}
        />
      </Styled.ContentInput>
    </Styled.Wrapper>
  );
}

export default Input;
