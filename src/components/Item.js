import { ItemWrapper } from "../styles";

function Item({ food }) {
  return (
    <ItemWrapper>
      <img src={food.image} />
      <h3>{food.name}</h3>
    </ItemWrapper>
  );
}

export default Item;
