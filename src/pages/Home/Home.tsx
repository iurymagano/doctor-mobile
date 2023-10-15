import * as Styled from "./styles";
import Location from "../../components/Location/Location";
import Notification from "../../components/Notification/Notification";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Location />
        <Notification />
      </Styled.Header>
      <Input
        isIcon={true}
        icon={{ name: "search", color: "#0165fc" }}
        placeholder="Search"
      />
      <Button />
    </Styled.Wrapper>
  );
}

export default Home;
