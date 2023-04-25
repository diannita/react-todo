import React from "react";

const InputWithLabel = ({ label, value, onChange }) => {
  return (
    <>
      <label htmlFor="todoTitle">{label}</label>
      <input id="todoTitle" name="title" value={value} onChange={onChange} />
    </>
  );
};

export default InputWithLabel;
