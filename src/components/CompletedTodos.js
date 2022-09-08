import React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateStatus from "../redux/todos/thunk/updateStatus";

function CompletedTodos() {
  const dispatch = useDispatch();
  const todosCompleted = useSelector((state) => state.todos)?.filter(
    (todos) => todos.completed
  );

  const handleStatusChange = (todoId, completed) => {
    dispatch(updateStatus(todoId, completed));
  };

  return (
    <div>
      <h2 className="text-center font-bold text-2xl mb-2 border py-2">
        Completed Tasks
      </h2>
      <table className="table-auto w-full">
        {todosCompleted.map((todo) => (
          <tr
            key={todo.id}
            className="hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0 w-full flex items-center justify-start"
          >
            <td className="px-6 py-4">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleStatusChange(todo.id, todo.completed)}
                className="opacity-0 absolute w-6 h-6"
              />
              <svg
                className="fill-current w-6 h-6 p-1 text-green-500 pointer-events-none rounded-full bg-white border-2 border-gray-400"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </td>
            <td>{todo.text}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CompletedTodos;
