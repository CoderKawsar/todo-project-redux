import { textUpdated } from "../actions";

const updateText = (todoId, updatedText) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://learn-with-sumit-server.herokuapp.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: updatedText,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(textUpdated(todo.id, todo.text));
  };
};

export default updateText;
