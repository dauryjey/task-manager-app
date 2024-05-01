import { Status } from "./Status"

interface TaskColProps {
		title:	string
}

export const TaskCol = ({ title }: TaskColProps) => {
  return (
    <div>
      <Status text={title}/>
    </div>
  )
}
