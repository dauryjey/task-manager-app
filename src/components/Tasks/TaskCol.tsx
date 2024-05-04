import { Status } from "./Status"

interface TaskColProps {
		title:	string
}

export const TaskCol = ({ title }: TaskColProps) => {
  return (
    <div className="md:w-[25%]">
      <Status text={title}/>
    </div>
  )
}
