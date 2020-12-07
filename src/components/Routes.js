//from React
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

//Components
import List from "./List";
import IngredientList from "./IngredientList";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

//stores
import recipeStore from "../stores/recipeStore";
import categoryStore from "../stores/categoryStore";
import ingredientStore from "../stores/ingredientStore";

//buttons
import AddButton from "./AddButton";
import { Title } from "../styles";
import AddIngredient from "./AddIngredient";

//styles

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/:recipename/recipe-details">
          <Title>Cook with passion</Title>
          <RecipeDetails food={recipeStore.recipes} listPath={""} />
        </Route>
        <Route path="/recipes">
          <Title>Recipes</Title>
          <List food={recipeStore.recipes} listPath={"/recipe-details"} />
        </Route>

        <Route path="/:ingredients/recipes">
          <Title>Recipes</Title>
          <RecipeList food={recipeStore.recipes} listPath={""} />
        </Route>

        <Route path="/:categories/ingredients">
          <Title>ingredients</Title>
          <AddIngredient></AddIngredient>
          <IngredientList
            food={ingredientStore.ingredients}
            listPath={"/recipes"}
          />
        </Route>

        <Route path="/ingredients">
          <Title>ingredients</Title>
          <List food={ingredientStore.ingredients} listPath={"/recipes"} />
        </Route>

        <Route path="/categories">
          <Title>Categories</Title>
          <AddButton></AddButton>
          <List food={categoryStore.categories} listPath={"/ingredients"} />
        </Route>

        {/* need to create onemore route for the home */}
      </Switch>
    </>
  );
};

export default observer(Routes);
