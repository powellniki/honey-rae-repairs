import { useParams } from "react-router-dom"
import { getCustomerByUserId } from "../../services/customerService.jsx"
import { useEffect, useState } from "react"



export const CustomerDetails = () => {
    const [customer, setCustomer] = useState({})
    // /customers/3 >this is the value
    // path="/customers/:customerId" >this is the key
    const {customerId} = useParams()  // {customerId: 3}

    useEffect(() => {
        getCustomerByUserId(customerId).then(customerData => {
            const customerObject = customerData[0]
            setCustomer(customerObject)})
    },[customerId])

    return (
        <section className="customer">
            <header className="customer-header">{customer.user?.fullName}</header>
            <div>
                <span className="customer-info">Email: {customer.user?.email}</span>
            </div>
            <div>
                <span className="customer-info">Address: </span>
                {customer.address}
            </div>
            <div>
                <span className="customer-info">Phone: {customer.phoneNumber}</span>
            </div>
        </section>
    )
}