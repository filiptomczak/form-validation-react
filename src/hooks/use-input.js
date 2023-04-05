import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const valueIsValid = validate(enteredValue);
  const hasError = !valueIsValid && inputTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };

  const reset = () => {
    setInputTouched(false);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
