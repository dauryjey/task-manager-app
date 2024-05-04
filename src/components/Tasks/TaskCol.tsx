import { Status } from "./Status"

interface TaskColProps {
		title:	string
    children?: React.ReactNode
}

export const TaskCol = ({ title, children }: TaskColProps) => {
  return (
    <div className="md:w-[25%]">
      <Status text={title}/>
      {children}
    </div>
  )
}
