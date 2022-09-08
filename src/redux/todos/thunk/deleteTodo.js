import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(
      `https://learn-with-sumit-server.herokuapp.com/todos/${todoId}`,
      {
        method: "DELETE",
      }
    );

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
