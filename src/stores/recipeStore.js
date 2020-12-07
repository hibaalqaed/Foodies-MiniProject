import { makeAutoObservable } from "mobx";
import axios from "axios";

class RecipeStore {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  //fetch
  fetchRecipes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/recipes");
      this.recipes = res.data;
    } catch (error) {
      console.error("recipestore -> fetchrecipes -> error", error);
    }
  };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;
