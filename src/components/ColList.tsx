import { TaskCol } from "./TaskCol"

interface ColListProps {
  colTitle: string[]
}

export const ColList = ({ colTitle }: ColListProps) => {
  return (
    <div>
      {colTitle.map((title, idx) => (
        <TaskCol title={title} key={idx} />
      ))}
    </div>
  )
}
