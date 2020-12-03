import Modal from "react-modal";
import { useState } from "react";

//style
import { CreateButtonStyled } from "../../styles";

//store
import categoryStore from "../../stores/categoryStore";

const AddModal = ({ isOpen, closeModal }) => {
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
    console.log(`${[event.target.name]}: ${event.target.value}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(category);
    categoryStore.createCategory(category);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Add Modal">
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              value={category.name}
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
            value={category.image}
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

export default AddModal;
