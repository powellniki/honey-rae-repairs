import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"
import { FilterBar } from "./FilterBar.jsx"



export const TicketList = ({currentUser}) => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [openTicketsOnly, setOpenTicketsOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [displayedTickets, setDisplayedTickets] = useState([])

  // the function is what we want to happen, the array is when we want it to happen
  // an empty array lets the function know to only run this on the initial render of the component

  
  const getAndSetTickets = () => {
    getAllTickets().then(ticketArray => {
      if (currentUser.isStaff) {
        setAllTickets(ticketArray)
      } else {
        const customerTickets = ticketArray.filter(ticket => ticket.userId === currentUser.id)
        setAllTickets(customerTickets)
      }
    })
  }

  useEffect(() => {
    getAndSetTickets()
  }, [currentUser])


  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets])


  useEffect(() => {
     if (openTicketsOnly) {
      const openTickets = allTickets.filter(ticket => ticket.dateCompleted === "")
      setFilteredTickets(openTickets)
     } else {
      setFilteredTickets(allTickets)
     }
  }, [openTicketsOnly, allTickets])



  // filter tickets with search input
  useEffect(() => {
    const foundTickets = filteredTickets.filter((ticket) => ticket.description.toLowerCase().includes(searchInput.toLowerCase()))
    setDisplayedTickets(foundTickets)
  }, [filteredTickets, searchInput])



  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchInput={setSearchInput} setOpenTicketsOnly={setOpenTicketsOnly} currentUser={currentUser}/>
      <article className="tickets">
        {displayedTickets.map(ticketObj => {
          return <Ticket ticket={ticketObj} currentUser={currentUser} getAndSetTickets={getAndSetTickets} key={ticketObj.id}/>
        })}
      </article>
    </div>
  )
}








