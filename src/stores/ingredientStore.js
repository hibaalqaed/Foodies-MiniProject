import { makeAutoObservable, observable } from "mobx";
import ingredient from "../ingredient";

class IngredientStore {
  ingredient = ingredient;

  constructor() {
    makeAutoObservable(this);
  }
}

const ingredientStore = new IngredientStore();
export default ingredientStore;
