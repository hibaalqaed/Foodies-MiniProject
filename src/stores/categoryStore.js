import { makeAutoObservable, observable } from "mobx";
import category from "../category";

class CategoryStore {
  category = category;

  constructor() {
    makeAutoObservable(this);
  }
}

const categoryStore = new CategoryStore();
export default categoryStore;
