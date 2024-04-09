import { useEffect, useState } from "react";
import { getEmployeesById } from "../../services/employeeService.jsx";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
    const [ticketCount, setTicketCount] = useState(0)

    const {employeeId} = useParams()

    useEffect(() => {
        getEmployeesById(employeeId).then(employeeData => {
            const employeeObject = employeeData[0]
            setEmployee(employeeObject)}) 
    },[employeeId])



    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email: {employee.user?.email}</span>
            </div>
            <div>
                <span className="employee-info">Specialty: {employee.specialty}</span>
            </div>
            <div>
                <span className="employee-info">Rate: ${employee.rate}</span>
            </div>
            <div>
                <span className="employee-info">This employee is working on {employee.employeeTickets?.length} tickets</span>
            </div>
        </section>
    )
}