import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Form.css"
import { getEmployeesById, updateEmployee } from "../../services/employeeService.jsx"



// we went to display the employee specialty and the employee rate and be able to edit both
export const EmployeeForm = ({currentUser}) => {
    const [employee, setEmployee] = useState({})

    const navigate = useNavigate()
    

    useEffect(() => {
        getEmployeesById(currentUser.id).then(employeeData => {
            const employeeObject = employeeData[0]
            setEmployee(employeeObject)
        }) 
    },[currentUser])


    const handleInputChange = (event) => {
        const stateCopy = {...employee}
        stateCopy[event.target.name] = event.target.value
        setEmployee(stateCopy)
    }


    const handleSave = (event) => {
        event.preventDefault()
        console.log("button clicked!")

        const editedEmployee = {
            id: employee.id,
            specialty: employee.specialty,
            rate: employee.rate,
            userId: employee.userId
        }
        updateEmployee(editedEmployee).then(() => {
             navigate(`/employees/${currentUser.id}`)
        })
    }


    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Specialty:</label>
                    <input 
                        type="text"
                        name="specialty"
                        value={employee?.specialty} 
                        onChange={handleInputChange}
                        required 
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Hourly Rate:</label>
                        <input 
                        type="number"
                        name="rate"
                        value={employee?.rate}
                        onChange={handleInputChange}
                        required 
                        className="form-control"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button 
                        className="form-btn btn-primary"
                        onClick={handleSave}
                    >Save Profile</button>
                </div>
            </fieldset>
        </form>
    )

} 