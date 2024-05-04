import { IoIosAddCircle } from "react-icons/io"

export const AddNewBoardButton = () => {
  return (
    <button className="flex items-center gap-2 text-neutral-100 hover:text-neutral-200">
      <IoIosAddCircle />
      <span className="font-semibold">Add new board</span>
    </button>
  )
}
