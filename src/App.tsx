import { AddNewBoardButton } from "./components/AddNewBoardButton"
import { ColList } from "./components/ColList"
import { Layout } from "./components/Layout"
import { ChangeThemeBtn } from "./components/ChangeThemeBtn"
import { TaskColLayout } from "./components/TaskColLayout"
import { colTitle } from "./const/ColTitle"
import { useEffect, useState } from "react"

function App() {
  const [theme, setTheme] = useState<boolean>(true)

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      setTheme(true)
    } else {
      document.documentElement.classList.remove("dark")
      setTheme(false)
    }
  }, [theme])


  return (
    <Layout>
      <TaskColLayout>
        <p className="font-medium mb-2">Boards</p>
        <AddNewBoardButton />
        <ChangeThemeBtn theme={theme} setTheme={setTheme} />
      </TaskColLayout>
      <TaskColLayout>
        <ColList colTitle={colTitle} />
      </TaskColLayout>
    </Layout>
  )
}

export default App
