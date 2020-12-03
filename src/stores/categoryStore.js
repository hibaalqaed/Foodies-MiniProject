import { makeAutoObservable } from "mobx";
import category from "../category";

class CategoryStore {
  categories = category;

  constructor() {
    makeAutoObservable(this);
  }

  createCategory = (newcategory) => {
    this.categories.push(newcategory);
    console.log(
      "CategoryStore -> createCategory -> this.Categorys",
      this.categories[this.categories.length - 1]
    );
  };
}

const categoryStore = new CategoryStore();
export default categoryStore;
