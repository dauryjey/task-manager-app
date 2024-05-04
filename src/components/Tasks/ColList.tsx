import { TaskCol } from "./TaskCol"

interface ColListProps {
  colTitle: string[]
}

export const ColList = ({ colTitle }: ColListProps) => {
  return (
    <div className="flex flex-col justify-between md:flex-row gap-4 px-4">
      {colTitle.map((title, idx) => (
        <TaskCol title={title} key={idx} />
      ))}
    </div>
  )
}
