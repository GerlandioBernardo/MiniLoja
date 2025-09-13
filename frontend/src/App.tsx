import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Router";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Router />
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
