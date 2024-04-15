import { useEffect, useState } from "react"
import { EmployeeViews } from "./EmployeeViews.jsx"
import { CustomerViews } from "./CustomerViews.jsx"


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})


  // simulates storing the user to the database
  // doing this in the parent component, that way if another component needs it, we can pass it down to them as a prop
  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    
    setCurrentUser(honeyUserObject)
  }, [])



  return currentUser.isStaff ? <EmployeeViews currentUser={currentUser} /> : <CustomerViews currentUser={currentUser}/>
}
