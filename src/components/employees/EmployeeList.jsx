import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/userService.jsx";
import { Users } from "../users/Users.jsx";
import { Link } from "react-router-dom";


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
                return (
                    <Link to={`/employees/${employeeObj.id}`}>
                        <Users user={employeeObj} key="employee-user"/>
                    </Link>
                )
            })}
        </div>
    )
}