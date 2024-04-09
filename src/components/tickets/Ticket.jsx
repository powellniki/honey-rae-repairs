import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"

export const Ticket = ({ticket}) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState('')


    // get all employees from database
    useEffect(() => {
        getAllEmployees().then((employeeArray) => {
            setEmployees(employeeArray)
            console.log("employees set")
        })
    }, [])



    // look for assigned employee tickets
    useEffect(() => {
        const foundEmployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId
        )
        setAssignedEmployee(foundEmployee)
    },[employees, ticket])



    return (
        <section className="ticket">
              <header className="ticket-info">#{ticket.id}</header>
              <div>{ticket.description}</div>
              <footer>
                <div>
                    <div className="ticket-info">assignee</div>
                    <div>{assignedEmployee ? assignedEmployee.user.fullName : "none"}</div>
                </div>
                <div>
                  <div className="ticket-info">emergency</div>
                  <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
              </footer>
            </section>
    )
    
}