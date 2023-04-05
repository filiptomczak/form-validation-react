import useInput from "../hooks/use-input";
import "../styles.css";

const InputForm = () => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail
  } = useInput((value) => value.includes("@"));

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      return;
    }
    resetName();
    resetEmail();
    console.log("request send!");
  };

  let inputNameClasses = nameHasError ? "input invalid" : "";
  let inputEmailClasses = emailHasError ? "input invalid" : "";

  let error = nameHasError || emailHasError ? <p>input is invalid</p> : "";

  return (
    <form className="Card" onSubmit={formSubmitHandler}>
      <label>enter name:</label>
      <input
        className={inputNameClasses}
        type="text"
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredName}
      />
      <label>enter email:</label>
      <input
        className={inputEmailClasses}
        type="text"
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
      />
      <div className="btn">
        <button disabled={!formIsValid}>send</button>
      </div>
      {error}
    </form>
  );
};

export default InputForm;
