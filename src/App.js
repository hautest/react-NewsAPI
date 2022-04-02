import React from "react";
import { useState } from "react";
import { Input } from "./components/Input";
import { Modal } from "./components/Modal";
import "./App.css";

function WindowReload() {
  window.location.reload();
}

function App() {
  const [modalTitle, setmodalTitle] = useState("");
  const [modalContent, setmodalContent] = useState("");
  const [modalToggle, setmodalToggle] = useState("modalOff");
  //모달에 들어갈 데이터
  const makeModal = (event) => {
    setmodalTitle(event.target.title);
    setmodalContent(event.target.outerText);
    setmodalToggle("modalOn");
  };
  return (
    <div>
      <h1 className="title" onClick={WindowReload}>
        NEWS
      </h1>
      <Modal
        modalTitle={modalTitle}
        modalContent={modalContent}
        modalToggle={modalToggle}
        setmodalToggle={setmodalToggle}
      ></Modal>
      <Input makeModal={makeModal} modalToggle={modalToggle}></Input>
    </div>
  );
}

export default App;
