//store

import { ListWrapper } from "../styles";

//components
import Item from "./Item";

function List({ food }) {
  return (
    <ListWrapper>
      {food.map((fooditem) => (
        <Item food={fooditem} />
      ))}
    </ListWrapper>
  );
}

export default List;
