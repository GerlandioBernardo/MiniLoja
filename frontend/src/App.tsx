import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";


function App() {
  return (
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  )
}

export default App
