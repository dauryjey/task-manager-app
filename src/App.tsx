import { ColList } from "./components/ColList"
import { Layout } from "./components/Layout"
import { TaskColLayout } from "./components/TaskColLayout"
import { colTitle } from "./const/ColTitle"

function App() {

  return (
    <Layout>
      <TaskColLayout>
        <p className="font-medium">Boards</p>
        <button className="bg-transparent font-medium text-white text-start rounded-lg p-2">Add new board</button>
      </TaskColLayout>
      <TaskColLayout>
        <ColList colTitle={colTitle} />
      </TaskColLayout>
    </Layout>
  )
}

export default App
