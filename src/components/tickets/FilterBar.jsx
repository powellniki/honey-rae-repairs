import { useNavigate } from "react-router-dom"

export const FilterBar = ({setShowEmergencyOnly, setSearchInput, setOpenTicketsOnly, currentUser}) => {
    const navigate = useNavigate()

    return (
        <div className="filter-bar">
            {currentUser.isStaff ? <>
                <button className="filter-btn btn-primary" onClick={() => { setShowEmergencyOnly(true) }}>Emergency</button>
                <button className="filter-btn btn-info" onClick={() => { setShowEmergencyOnly(false) }}>Show All</button>
                <input onChange={(event) => {setSearchInput(event.target.value)}} type="text" placeholder="search tickets..." className="ticket-search"/>
            </> :
            <>
                <button className="filter-btn btn-primary" onClick={() => { navigate(`/tickets/create`) }} >Create Ticket</button>
                <button className="filter-btn btn-info" onClick={() => { setOpenTicketsOnly(true) }} >Open Tickets</button>
                <button className="filter-btn btn-secondary" onClick={() => { setOpenTicketsOnly(false) }} >My Tickets</button>
                <input onChange={(event) => {setSearchInput(event.target.value)}} type="text" placeholder="search tickets..." className="ticket-search"/>
            </>
            }
        </div>
    )
  }