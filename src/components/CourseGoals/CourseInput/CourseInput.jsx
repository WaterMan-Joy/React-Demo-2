import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${(props) => (props.invalid ? "red" : "green")};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "green")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
  }

  &.valid input {
    border-color: green;
  }

  &.invalid {
    color: red;
  }

  &.valid {
    color: green;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
      props.onAddGoal(enteredValue);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${isValid ? "valid" : "invalid"}`}> */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          placeholder={isValid ? "입력하세요" : "다시 입력하세요"}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
