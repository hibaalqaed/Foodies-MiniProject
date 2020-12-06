import { Title, Description, HomePage, ButtonStyled } from "../styles";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <HomePage>
      <div>
        <NavBar />
        <Title>Foodiez</Title>
        <Description>Where you can find all the delightful</Description>
        <Description> recipes</Description>
        <ButtonStyled onClick={() => window.scroll(0, 700)}>Start</ButtonStyled>
      </div>
    </HomePage>
  );
};

export default Home;
