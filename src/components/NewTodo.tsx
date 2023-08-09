import { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // type is HTMLInputElement (google for more)
  // also wants an initial value as it might already be used. For initial value we can add null.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // .current property always holds the actual value in useRef
    // .current? shows that if the value is accessible, the value should be stored. Otherwise, store null.
    // if we for sure know that it won't be null (like in our case the function is called after submission)
    // then we can add ! next to current
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
