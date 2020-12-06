import axios from "axios";
import { makeAutoObservable } from "mobx";

class CategoryStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8000/categories");
      this.categories = res.data;
    } catch (error) {
      console.error("CategorieStore -> fetchCategories -> error", error);
    }
  };

  createCategory = async (newcategory) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/categories",
        newcategory
      );
      this.categories.push(res.data);
    } catch (error) {
      console.error("CategorieStore -> createCategories -> error", error);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();
export default categoryStore;
