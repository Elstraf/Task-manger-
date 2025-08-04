import { useSelector } from "react-redux";
import type { RootState } from "../../../../store";
import { TodoCard } from "../TodoCard";

export const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);

  if (todos.length <= 0) {
    return <div className="mt-4">No todos found. How about making one </div>;
  }

  return (
    <div className="flex flex-col mt-4 gap-4">
      {todos.map((todo) => (
        <TodoCard todoDetails={todo} key={todo.id} />
      ))}
    </div>
  );
};
