export const FilterBar = ({setShowEmergencyOnly, setSearchInput}) => {
    return (
        <div className="filter-bar">
            <button className="filter-btn btn-primary" onClick={() => { setShowEmergencyOnly(true) }}>Emergency</button>
            <button className="filter-btn btn-info" onClick={() => { setShowEmergencyOnly(false) }}>Show All</button>
            <input onChange={(event) => {setSearchInput(event.target.value)}} type="text" placeholder="search tickets..." className="ticket-search"/>
        </div>
    )
  }