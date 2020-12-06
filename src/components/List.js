//style
import { ListWrapper } from "../styles";

//observer
import { observer } from "mobx-react";

//components
import Item from "./Item";

function List({ food, listPath }) {
  return (
    <>
      <ListWrapper>
        {food.map((fooditem) => (
          <Item food={fooditem} listPath={listPath} />
        ))}
      </ListWrapper>
    </>
  );
}

export default observer(List);
