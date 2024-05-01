interface BoardsLayoutProps {
  children?: React.ReactNode
}

export const BoardsLayout = ({ children }: BoardsLayoutProps) => {
  return (
    <aside className="bg-neutral-800 w-full rounded-xl p-4">{children}</aside>
  )
}
