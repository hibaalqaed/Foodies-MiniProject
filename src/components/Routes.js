//from React
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

//Components
import List from "./List";
import AddButton from "./AddButton";

//stores
import recipeStore from "../stores/recipeStore";
import categoryStore from "../stores/categoryStore";
import ingredientStore from "../stores/ingredientStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:ingredientName/recipes">
        <List food={recipeStore.recipes} listPath={""} />
      </Route>

      <Route path="/:categoryName">
        <List food={ingredientStore.ingredients} listPath={"/recipes"} />
      </Route>

      <Route path="/">
        <AddButton></AddButton>
        <List food={categoryStore.categories} listPath={""} />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
