import './App.css'
import Routing from "./routes";
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Routing/>
        </Router>
      </>
  )
}

export default App
