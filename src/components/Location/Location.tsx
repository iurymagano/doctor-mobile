import * as Styled from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

function Location() {
  return (
    <Styled.Wrapper>
      <Styled.Label>Localização</Styled.Label>
      <Styled.Address>
        <MaterialIcons name="location-on" size={24} color="#0165fc" />
        <Styled.Text>São José, SC</Styled.Text>
        <MaterialIcons name="keyboard-arrow-down" size={32} color="#242424" />
      </Styled.Address>
    </Styled.Wrapper>
  );
}

export default Location;
