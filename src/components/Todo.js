import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useState } from "react";

function Todo(props) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    console.log("backdrop")
    setModalIsOpen(false)
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {ModalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {ModalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
