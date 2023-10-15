import { useState } from "react";
import * as Styled from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

function Notification() {
  const [isNotification, setIsNotification] = useState(true);

  return (
    <Styled.Wrapper>
      <MaterialIcons name="notifications" size={28} color="black" />
      {isNotification && <Styled.isNotification />}
    </Styled.Wrapper>
  );
}

export default Notification;
