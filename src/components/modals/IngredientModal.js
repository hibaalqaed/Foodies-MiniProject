import Modal from "react-modal";
import { useState } from "react";

//style
import { CreateButtonStyled } from "../../styles";

//store
import ingredientStore from "../../stores/ingredientStore";

const IngredientModal = ({ isOpen, closeModal, categoryId }) => {
  //state
  const [ingredient, setIngredient] = useState({
    categoryId: categoryId,
    name: "",
    image: "",
  });

  //handle input
  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
    console.log(`${[event.target.name]}: ${event.target.value}`);
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ingredient);
    ingredientStore.createIngredient(ingredient, categoryId);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Add Modal">
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              value={ingredient.name}
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            value={ingredient.image}
            type="text"
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled onClick={handleSubmit}>Add</CreateButtonStyled>
        <CreateButtonStyled
          onClick={() => {
            closeModal();
          }}
        >
          Cancel
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default IngredientModal;
