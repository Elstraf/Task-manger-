import { useState } from "react";
import type { TaskType } from "../../../../types";
import type { priorityType } from "../CreateForm";
import { Button } from "../../../../components/Button";
import { updateTodo } from "../../slice";
import { useDispatch } from "react-redux";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

type EditModalFormProps = {
  todo: TaskType;
};

export const EditModal = ({ todo }: EditModalFormProps) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState<TaskType["priority"]>(todo.priority);
  const [dueDate, setDueDate] = useState(todo.dueDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      updateTodo({
        ...todo,
        title,
        description,
        priority,
        dueDate,
      })
    );

    setIsOpen(false);
  };

  return (
    <>
      <Button
        className="bg-blue-300 hover:bg-blue-400"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 text-black">
            <DialogTitle>Editing {title} todo</DialogTitle>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="shadow p-2"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="shadow p-2"
              />
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as priorityType)}
                className="shadow p-2"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="shadow p-2"
              />
              <div className="flex gap-4">
                <Button
                  className="bg-gray-300 hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-green-300 hover:bg-green-400 text-black"
                >
                  Edit Todo
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
