import { IoIosAddCircle } from "react-icons/io"

export const AddNewTaskBtn = () => {
  return (
    <button className="flex justify-between gap-2 items-center bg-indigo-300 text-white dark:text-blue-900 py-1 px-4 rounded-xl w-full mt-2">
      <span className="font-semibold">Add new task</span>
      <IoIosAddCircle />
    </button>
  )
}
