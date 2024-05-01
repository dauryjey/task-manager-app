interface StatusProps {
  text: string
}

export const Status = ({ text }: StatusProps) => {
  let color: string = "bg-gray-500"

  switch (text.toLowerCase()) {
    case "backlog":
      color = "bg-red-500"
      break

    case "in progress":
      color = "bg-yellow-500"
      break

    case "in review":
      color = "bg-purple-500"
      break

    case "done":
      color = "bg-green-500"
  }

  return (
    <span className="flex items-center gap-2">
      <span className={`${color} w-2 h-2 rounded-full`}></span>
      <p className="font-medium">{text}</p>
    </span>
  )
}
