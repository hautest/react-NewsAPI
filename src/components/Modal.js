import React from "react";

const Modal = ({ modalTitle, modalContent, modalToggle, setmodalToggle }) => {
  const modalOff = () => setmodalToggle("modalOff");
  return (
    <div className={modalToggle}>
      <div> {modalTitle} </div>
      <div> {modalContent} </div>
      <button onClick={modalOff}>X</button>
    </div>
  );
};

export { Modal };
