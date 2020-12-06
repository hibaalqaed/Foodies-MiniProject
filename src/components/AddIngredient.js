import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
//store
import categoryStore from "../stores/categoryStore";

//modal
import IngredientModal from "./modals/IngredientModal";

const AddButton = () => {
  const categoryId = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <IngredientModal
        isOpen={isOpen}
        closeModal={closeModal}
        categoryId={categoryId}
      />
    </>
  );
};

export default AddButton;
