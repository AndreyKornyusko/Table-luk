import React, { useEffect, useState, useRef } from "react";
import './Modal.css';

const Modal = ({ onClose, onDelete }) => {
  const node = useRef();

  const handleBackdropClick = e => {
    // console.log("node.current", node.current)
    if (node.current.contains(e.target)) return;
    onClose();
  };

  const handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);


  console.log("node", node)

  return (

    <div
      className="modalbackdrop"
      ref={node}
      onClick={handleBackdropClick}
    >
      <div className="modalWrap">
        <h3>Do you confirm row deletion?</h3>
        <div className="modalWrap__btn-wrap">
          <button className="modalWrap__btn-close" onClick={onClose}>Close</button>
          <button className="modalWrap__btn-del" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
