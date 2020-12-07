import { useParams } from "react-router-dom";

//style
import { ListWrapper } from "../styles";

//observer
import { observer } from "mobx-react";

//components
import Item from "./Item";
import categoryStore from "../stores/categoryStore";

function IngredientList({ food, listPath }) {
  //   const catergoryId = useParams();
  //   const findObject = categoryStore.categories.find(
  //     (category) => category.slug === catergoryId.categories
  //   );

  //   const List = food.filter(
  //     (fooditem) => fooditem.categoriesId === findObject.id
  //   );

  return (
    <>
      {/* {List.length === 0 ? (
        <h1>No Recipes</h1>
      ) : ( */}
      <ListWrapper>
        {food.map((item) => (
          <Item food={item} listPath={listPath} />
        ))}
      </ListWrapper>
      {/* )} */}
    </>
  );
}

export default observer(IngredientList);
