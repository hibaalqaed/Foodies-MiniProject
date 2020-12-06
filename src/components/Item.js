import { ItemWrapper } from "../styles";

// //observer
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function Item({ food, listPath }) {
  return (
    <ItemWrapper>
      <Link to={`/${food.slug}${listPath}`}>
        <img src={food.image} />
      </Link>

      <h3>{food.name}</h3>
    </ItemWrapper>
  );
}

export default observer(Item);
