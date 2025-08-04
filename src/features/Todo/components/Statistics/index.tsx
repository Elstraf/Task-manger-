import { useSelector } from "react-redux";
import type { RootState } from "../../../../store";
import { Card } from "../../../../components/Card";

export const Satistics = () => {
  const { todos } = useSelector((state: RootState) => state.todo);

  const completeTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.length - completeTodos;
  return (
    <div className="flex gap-3 mb-4">
      <Card body={todos.length.toString()} title="Total Todos" />
      <Card title="Finished Todos" body={completeTodos.toString()} />
      <Card title="Pending Todos" body={pendingTodos.toString()} />
    </div>
  );
};
