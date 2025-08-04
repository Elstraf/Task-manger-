import { useDispatch } from "react-redux";
import { Button } from "../../../../components/Button";
import type { TaskIdType } from "../../../../types";
import { markTodoAsComplete } from "../../slice";

type CompleteButtonProps = TaskIdType;

export const CompleteButton = ({ id }: CompleteButtonProps) => {
  const dispatch = useDispatch();

  return (
    <Button
      className="bg-green-300 hover:bg-green-400"
      onClick={() => dispatch(markTodoAsComplete(id))}
    >
      Mark as Completed
    </Button>
  );
};
