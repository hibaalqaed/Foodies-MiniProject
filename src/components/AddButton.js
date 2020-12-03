import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

//modal
import AddModal from "./modals/AddModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <AddModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
