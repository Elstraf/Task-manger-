import type { TaskType } from "../../../../types";
import { CompleteButton } from "../CompleteButton";
import { DeleteButton } from "../DeleteButton";
import { EditModal } from "../Edit";

type TodoProps = {
  todoDetails: TaskType;
};

export const TodoCard = ({ todoDetails }: TodoProps) => {
  return (
    <div className="bg-white text-black p-4 rounded shadow flex flex-col gap-4">
      <div>
        <h2>
          {todoDetails.title} -{" "}
          <span className=" text-xs">priority {todoDetails.priority}</span>
        </h2>
        <p>{todoDetails.description}</p>
        <p className="text-xs">{todoDetails.dueDate}</p>
        <p>Completed: {todoDetails.completed ? "yes" : "no"}</p>
      </div>

      <div className="flex gap-4">
        <CompleteButton id={todoDetails.id} />
        <DeleteButton id={todoDetails.id} />
        <EditModal todo={todoDetails} />
      </div>
    </div>
  );
};
