import { makeAutoObservable, observable } from "mobx";
import recipe from "../recipe";

class RecipeStore {
  recipes = recipe;

  constructor() {
    makeAutoObservable(this);
  }
}

const recipeStore = new RecipeStore();
export default recipeStore;
