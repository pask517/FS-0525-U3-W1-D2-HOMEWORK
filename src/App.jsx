import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"

import AllTheBooks from "./components/AllTheBooks"

function App() {
  return (
    <div className="App">
      <MyNav />
      <AllTheBooks />
      <MyFooter />
    </div>
  )
}

export default App
