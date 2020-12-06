import { Title, Description, HomePage, ButtonStyled } from "../styles";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <HomePage>
      <NavBar />
      <div>
        <Title>Foodiez</Title>
        <Description>Where you can find all the delightful</Description>
        <Description> recipes</Description>
        <ButtonStyled onClick={() => window.scroll(0, 500)}>Start</ButtonStyled>
      </div>
    </HomePage>
  );
};

export default Home;
