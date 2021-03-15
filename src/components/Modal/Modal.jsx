import React, { useState } from "react";
import "./Modal.css";
import "../Button/Button.css";

const ModalContent = ({ setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3> Modal Heading </h3>
        <p>
          Hello, modals can be used as interactive elements to create
          informative dialogs with the user.
        </p>
        <button
          type="button"
          className="close button-primary"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="modal-container">
      <h3> Modal </h3>
      <p>
        Modal component is used for creating dialogs, popovers, lightboxes, etc.
      </p>
      <h3> Usage </h3>
      <div className="modal-examples">
        <button
          type="button"
          className="button button-primary"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
      </div>
      <div>{showModal && <ModalContent setShowModal={setShowModal} />}</div>
    </div>
  );
}

export default Modal;
