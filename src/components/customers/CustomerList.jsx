import { useEffect, useState } from "react"
import { getAllCustomers } from "../../services/userService.jsx"
import { Users } from "../users/Users.jsx"
import "./customers.css"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])


    useEffect(() => {
        getAllCustomers().then(customerArray => {
            setCustomers(customerArray)
            console.log("customers set")
        })
    }, [])


    return (
        <div className="customers">
            {customers.map(customerObj => {
                return <Users user={customerObj} key="customer-user"/>
            })}
        </div>
    )
}


