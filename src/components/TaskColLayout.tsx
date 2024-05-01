interface TaskColLayoutProps {
	children?: React.ReactNode
}

export const TaskColLayout = ({ children }: TaskColLayoutProps) => {
	return (
			<main className="flex flex-col md:flex-row bg-neutral-700 w-full rounded-xl p-4">
					{children}
			</main>
	)
}
