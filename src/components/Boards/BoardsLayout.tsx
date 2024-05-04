interface BoardsLayoutProps {
  children?: React.ReactNode
}

export const BoardsLayout = ({ children }: BoardsLayoutProps) => {
  return (
    <aside className="flex flex-col gap-2 bg-neutral-800 w-full rounded-xl p-4">{children}</aside>
  )
}
