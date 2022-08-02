import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./Form.module.css";
const Form = (probs) => {
  const [isValid, setIsValid] = useState(true);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  function onUsernameHandler(e) {
    setUsername(e.target.value);
  }
  function onAgeHandler(e) {
    setAge(e.target.value);
  }

  function SubmitHandler(event) {
    event.preventDefault();
    const dataProvidedByForm = { username, age };

    if (username.length === 0 || age.length == 0) {
      setIsValid(false);
    } else {
      probs.onSaveData(dataProvidedByForm);
      setIsValid(true);
      setUsername("");
      setAge("");
    }
  }

  return (
    <form
      onSubmit={SubmitHandler}
      className={`${styles.form} ${!isValid ? styles.invalid : ""}`}
    >
      <div className={styles.form__container}>
        <label htmlFor="username" className={`${styles.form__label}`}>
          Username
        </label>
        <input
          onChange={onUsernameHandler}
          value={username}
          id="username"
          className={styles.form__input}
          type="text"
        ></input>
        <label htmlFor="Age" className={styles.form__label}>
          Age(Years)
        </label>
        <input
          value={age}
          onChange={onAgeHandler}
          id="Age"
          className={styles.form__input}
          type="number"
        ></input>
        <Button type="submit">Add User</Button>
      </div>
    </form>
  );
};
export default Form;
