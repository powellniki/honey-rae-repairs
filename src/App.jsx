import "./App.css"
import { CustomerList } from "./components/customers/CustomerList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { Users } from "./components/users/Users.jsx"
import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "./components/welcome/Welcome.jsx"
import { CustomerDetails } from "./components/customers/CustomerDetails.jsx"
import { EmployeeDetails } from "./components/employees/EmployeeDetails.jsx"
// the Outlet component tells the parent route where to render the child route element
// the index component renders in the outlet but only on the parent element "home"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<>
          <NavBar />
          <Outlet />
      </>} >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
      </Route>
    </Routes>
  )
}

