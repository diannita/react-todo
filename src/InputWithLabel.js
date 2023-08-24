import React, { useRef, useEffect } from "react";

const InputWithLabel = ({ value, onChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <br />
      <input
        name="title"
        type="text"
        id="todoTitle"
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;
