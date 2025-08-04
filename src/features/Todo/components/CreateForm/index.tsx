//Title Des, prio

import { useState } from "react";
import type { TaskType } from "../../../../types";
import { Button } from "../../../../components/Button";
import { useDispatch } from "react-redux";
import { createTodo } from "../../slice";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

//Grabbing Priority type
export type priorityType = TaskType["priority"];

export const CreateForm = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<priorityType>("low");
  const [dueDate, setDueDate] = useState("");

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setPriority("low");
    setDueDate("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //Going to use date as an Id as well
    const date = new Date().toLocaleString();

    dispatch(
      createTodo({
        id: title + date,
        title,
        description,
        priority,
        dueDate,
        completed: false,
        createdAt: date,
        updatedAt: date,
      })
    );
    resetFields();
    setIsOpen(false);
  };

  return (
    <>
      <Button
        className="bg-green-300 hover:bg-green-400 text-black"
        onClick={() => setIsOpen(true)}
      >
        Add Todo
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 text-black">
            <DialogTitle>Create Todo</DialogTitle>
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
                  Create Todo
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
