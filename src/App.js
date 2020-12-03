import "./App.css";

//observer
import { observer } from "mobx-react";

//components
import List from "./components/List";
import { Description, Title } from "./styles";

//button
import AddButton from "./components/AddButton";

//stores
import recipeStore from "./stores/recipeStore";
import categoryStore from "./stores/categoryStore";
import ingredientStore from "./stores/ingredientStore";

function App() {
  return (
    <>
      <Title>Foodiez</Title>
      <Description>Where you can find all the delightful recipes</Description>
      <AddButton></AddButton>
      <List food={categoryStore.categories} />
      <List food={ingredientStore.ingredients} />
      <List food={recipeStore.recipes} />
    </>
  );
}

export default observer(App);
