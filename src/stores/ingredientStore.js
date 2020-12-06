import { makeAutoObservable } from "mobx";
import axios from "axios";
import categoryStore from "./categoryStore";

class IngredientStore {
  ingredients = [];

  constructor() {
    makeAutoObservable(this);
  }

  //fetch
  fetchIngredients = async () => {
    try {
      const res = await axios.get("http://localhost:8000/ingredients");
      this.ingredients = res.data;
    } catch (error) {
      console.error("IngredientStore -> fetchIngredients -> error", error);
    }
  };

  //create
  createIngredient = async (newIngredient, categoryId) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/categories/${categoryId}/ingredients`,
        newIngredient
      );
      console.log("found me", categoryStore.findCategoryById(categoryId));
      this.ingredients.push(response.data);
    } catch (error) {
      console.error("error");
    }
  };
}

const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredients();
export default ingredientStore;
