import { useDispatch } from "react-redux";
import { Button } from "../../../../components/Button";
import type { TaskIdType } from "../../../../types";
import { deleteTodo } from "../../slice";
import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

// Picking the type incase it ever changes
type DeleteButtonProps = TaskIdType;

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        className="bg-red-300 hover:bg-red-400"
        onClick={() => setIsOpen(true)}
      >
        Delete
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 text-black">
            <DialogTitle className="font-bold">Delete Todo</DialogTitle>
            <Description>This will permanently delete your Todo</Description>

            <div className="flex gap-4">
              <Button
                className="bg-gray-300 hover:bg-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-red-300 hover:bg-red-400"
                onClick={() => {
                  setIsOpen(false);
                  dispatch(deleteTodo(id));
                }}
              >
                Delete
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
