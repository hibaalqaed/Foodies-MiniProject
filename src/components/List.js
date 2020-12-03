//style
import { ListWrapper } from "../styles";

//observer
import { observer } from "mobx-react";

//components
import Item from "./Item";

function List({ food }) {
  return (
    <>
      <ListWrapper>
        {food.map((fooditem) => (
          <Item food={fooditem} />
        ))}
      </ListWrapper>
    </>
  );
}

export default observer(List);
