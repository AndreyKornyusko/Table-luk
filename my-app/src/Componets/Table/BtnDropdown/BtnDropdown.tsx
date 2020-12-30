import React, { useEffect, useState, useRef } from "react";
import './BtnDropdown.css';

// const options = ["Activate", "Block", "Delete"];
const options = [
  { id: "Active", value: "Activate" },
  { id: "Blocked", value: "Block" },
  { id: "Delete", value: "Delete" }];


const Dropdown = ({ onChange, id }) => {
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

  const handleChange = selectedValue => {
    onChange(selectedValue, id);
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
      <div className="dropdown-toggler" onClick={e => setOpen(!open)}>
        button
      </div>
      {open && (
        <ul className="dropdown-menu">
          {options.map(opt => (
            <li key={opt.id} className="dropdown-menu-item" onClick={e => handleChange(opt.id)}>
              {opt.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
