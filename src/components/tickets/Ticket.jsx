import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"
import { assignTicket, updateTicket } from "../../services/ticketService.jsx"





export const Ticket = ({ticket, currentUser, getAndSetTickets }) => {
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



    const handleClaim = () => {
        //finding the current employee based off the current user ID and the employee data
        const currentEmployee = employees.find(employee => employee.userId === currentUser.id)

        // set new employee ticket object using employeeId
        const newEmployeeTicket =  {
            employeeId: currentEmployee.id,
            serviceTicketId: ticket.id
        }

        assignTicket(newEmployeeTicket).then(() => {
            getAndSetTickets()
        })
    }


    const handleClose = () => {
        const closedTicket = {
            id: ticket.id,
            user: ticket.userId,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: new Date()
        }
        updateTicket(closedTicket).then(() => {
            getAndSetTickets()
            console.log("ticket closed")
        })
    }



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
                <div className="btn-container">
                    {/*  if the logged in user is an emploee, and theres no employee ticket associated with 
                    the service ticket, then button to claim ticket should display */}
                    {currentUser.isStaff && !assignedEmployee ? <button onClick={handleClaim} className="btn btn-secondary">Claim</button> : ""}
                    
                    {/* if the logged in user is the assigned employee for the ticket and there is no date completed,
                    then a button to close the ticket should display */}
                    {assignedEmployee?.userId === currentUser.id && !ticket.dateCompleted ? <button onClick={handleClose} className="btn btn-warning">Close</button> : ""}
                </div>
              </footer>
            </section>
    )
    
}