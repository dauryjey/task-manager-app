interface ThemeModeProps {
  theme: boolean
  mode: "Dark" | "Light"
  icon: React.ReactNode
		changeTheme: () => void
}

export const ThemeMode = ({ theme, mode, icon, changeTheme }: ThemeModeProps) => {
	const isDark = theme && mode === "Dark" && "bg-neutral-700"
	const isLight = !theme && mode === "Light" && "bg-neutral-700"
	
	return (
		<span
		onClick={() => changeTheme()}
			className={`flex justify-center items-center gap-1 text-center p-3 w-[40%] rounded-xl ${isDark} ${isLight}`}
		>
			{icon}
			{mode}
		</span>
	)
}
