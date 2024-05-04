import { MdDarkMode } from "react-icons/md"
import { MdLightMode } from "react-icons/md"
import { ThemeMode } from "./ThemeMode"
import { changeTheme } from "../utils/changeTheme"

interface ChangeThemeBtnProps {
  theme: boolean
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChangeThemeBtn = ({ theme, setTheme }: ChangeThemeBtnProps) => {
  const handleThemeChange = () => {
    changeTheme(theme)
    setTheme(!theme)
  }

  return (
    <article className="flex mt-auto font-medium justify-around bg-neutral-600 rounded-xl py-1 justify-self-end">
      <ThemeMode
        changeTheme={handleThemeChange}
        theme={theme}
        mode="Dark"
        icon={<MdDarkMode />}
      />
      <ThemeMode
        changeTheme={handleThemeChange}
        theme={theme}
        mode="Light"
        icon={<MdLightMode />}
      />
    </article>
  )
}
