import { textUpdated } from "../actions";

const updateText = (todoId, updatedText) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: updatedText,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(textUpdated(todo.id, todo.text));
  };
};

export default updateText;
