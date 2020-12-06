import { useParams } from "react-router-dom";

//style
import { ListWrapper } from "../styles";

//observer
import { observer } from "mobx-react";

//components
import Item from "./Item";

function IngredientList({ food, listPath }) {
  const catergoryId = useParams();
  console.log(catergoryId.categories);
  const List = food.filter(
    (fooditem) =>
      fooditem.categories.name.toLowerCase() === catergoryId.categories
  );
  console.log(food.map((fooditem) => fooditem.categories.name.toLowerCase()));
  return (
    <>
      {List.length === 0 ? (
        <h1>No Ingredients</h1>
      ) : (
        <ListWrapper>
          {List.map((item) => (
            <Item food={item} listPath={listPath} />
          ))}
        </ListWrapper>
      )}
    </>
  );
}

export default observer(IngredientList);
