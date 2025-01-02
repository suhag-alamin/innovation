/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../styles/contact.scss";

const CustomDropdown = ({ options, name, value, onChange, required }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    onChange({ target: { name, value: option.value } });
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="custom-dropdown-toggle" onClick={handleToggle}>
        {value
          ? options.find((option) => option.value === value).label
          : "Select an option"}
      </div>
      {isOpen && (
        <div className="custom-dropdown-menu">
          {options.map((option) => (
            <div
              key={option.value}
              className="custom-dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
