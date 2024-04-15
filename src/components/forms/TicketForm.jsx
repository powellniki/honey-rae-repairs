import { useState } from "react"
import { createTicket } from "../../services/ticketService.jsx"
import { useNavigate } from "react-router-dom"



export const TicketForm = ({currentUser}) => {
    const [ticket, setTicket] = useState({
        description: "",
        emergency: false
    })

    const navigate = useNavigate()


    const handleSubmitNewTicket = (event) => {
        event.preventDefault()

        const newTicket = {
            userId: currentUser.id,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ""
        }
        createTicket(newTicket).then(() => {
            navigate(`/tickets`) 
        })
    }

    return (
        <form>
            <h2>New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label>Problem: </label>
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Brief description of the problem..."
                        onChange={(event) => {
                            const ticketCopy = {...ticket}
                            ticketCopy.description = event.target.value
                            setTicket(ticketCopy)
                        }}
                        required
                    ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Emergency?
                        <input 
                            type="checkbox"
                            onChange={(event) => {
                                const ticketCopy = {...ticket}
                                ticketCopy.emergency = event.target.checked
                                setTicket(ticketCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button 
                    className="form-btn btn-info"
                    onClick={handleSubmitNewTicket}
                    >Create Ticket</button>
                </div>
            </fieldset>
        </form>
    )
}