import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/userService.jsx";
import { Users } from "../users/Users.jsx";


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        {getAllEmployees().then(allEmployees => {
            setEmployees(allEmployees)
            console.log("employees set")
        })}
    },[])

    return (
        <div className="employees">
            {employees.map(employeeObj => {
                return <Users user={employeeObj} key="employee-user"/>
            })}
        </div>
    )
}