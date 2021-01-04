import React, { useEffect, useState, useRef } from "react";
import './Modal.css';

const Modal = ({ onChange, id }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClick = (e: any) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node} className="dropdown">
      <div className="dropdown__toggler" onClick={e => setOpen(!open)}>
      </div>
      {open && (
        <ul className="dropdown__menu">
        </ul>
      )}
    </div>
  );
};

export default Modal;
