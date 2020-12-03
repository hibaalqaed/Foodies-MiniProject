import "./App.css";

//components
import List from "./components/List";
import { Description, Title } from "./styles";

//stores
import recipeStore from "./stores/recipeStore";
import categoryStore from "./stores/categoryStore";
import ingredientStore from "./stores/ingredientStore";

function App() {
  return (
    <>
      <Title>Foodiez</Title>
      <Description>Where you can find delightful recipes</Description>
      <List food={categoryStore.category} />
      <List food={ingredientStore.ingredient} />
      <List food={recipeStore.recipes} />
    </>
  );
}

export default App;
