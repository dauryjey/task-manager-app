interface TaskColLayoutProps {
	children?: React.ReactNode
}

export const TaskColLayout = ({ children }: TaskColLayoutProps) => {
	return (
			<main className="flex flex-col flex-wrap bg-neutral-100 dark:bg-neutral-700 w-full rounded-xl p-4">
					{children}
			</main>
	)
}
