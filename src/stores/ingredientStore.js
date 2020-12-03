import { makeAutoObservable, observable } from "mobx";
import ingredient from "../ingredient";

class IngredientStore {
  ingredients = ingredient;

  constructor() {
    makeAutoObservable(this);
  }
}

const ingredientStore = new IngredientStore();
export default ingredientStore;
