import { AddNewBoardButton } from "./components/Boards/AddNewBoardButton"
import { ColList } from "./components/Tasks/ColList"
import { Layout } from "./components/Layout"
import { ChangeThemeBtn } from "./components/Boards/ChangeThemeBtn"
import { TaskColLayout } from "./components/Tasks/TaskColLayout"
import { colTitle } from "./const/ColTitle"
import { useEffect, useState } from "react"
import { BoardsLayout } from "./components/Boards/BoardsLayout"

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
      <BoardsLayout>
        <p className="font-medium mb-2">Boards</p>
        <AddNewBoardButton />
        <ChangeThemeBtn theme={theme} setTheme={setTheme} />
      </BoardsLayout>
      <TaskColLayout>
        <ColList colTitle={colTitle} />
      </TaskColLayout>
    </Layout>
  )
}

export default App
