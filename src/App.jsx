import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register.jsx"
import { Authorized } from "./views/Authorized.jsx"
import { ApplicationViews } from "./views/ApplicationViews.jsx"
// the Outlet component tells the parent route where to render the child route element
// the index component renders in the outlet but only on the parent element "home"




export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      // checks if user is authorized
      <Route path="*" element={
          // if the user IS authorized
          <Authorized>
            {/* then the applicationViews is the child component of authorized */}
            <ApplicationViews/>
          </Authorized>
        } 
      />
    </Routes>
  )
}

