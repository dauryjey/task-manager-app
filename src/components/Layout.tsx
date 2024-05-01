interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col md:grid grid-cols-4 grid-rows-1 gap-4 [&>*:nth-child(2)]:col-span-3 p-5">
      {children}
    </div>
  )
}
