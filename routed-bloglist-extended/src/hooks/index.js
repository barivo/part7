import React, { useState, useImperativeHandle } from "react";

export const useField = (type, ref) => {
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  useImperativeHandle(ref, () => ({ reset }));

  return {
    type,
    value,
    onChange,
  };
};
