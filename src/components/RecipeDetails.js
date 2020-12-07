import { useParams } from "react-router-dom";

//observer
import { observer } from "mobx-react";

import { DetailWrapper } from "../styles";

function IngredientList({ food, listPath }) {
  const recipeId = useParams();
  const findObject = food.find((recipe) => recipe.slug === recipeId.recipename);
  console.log("params ", recipeId);
  console.log("findObj ", findObject);

  return (
    <DetailWrapper>
      <img src={findObject.image} />
      <h1>{findObject.name}</h1>

      <p>{findObject.description}</p>
    </DetailWrapper>
  );
}

export default observer(IngredientList);
