import { ItemWrapper } from "../styles";

// //observer
import { observer } from "mobx-react";

function Item({ food }) {
  return (
    <ItemWrapper>
      <img src={food.image} />
      <h3>{food.name}</h3>
    </ItemWrapper>
  );
}

export default observer(Item);
