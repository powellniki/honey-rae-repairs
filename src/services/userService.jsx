

export const getAllCustomers = () => {
    return fetch('http://localhost:8088/users?isStaff=false').then((res) => res.json())
}


// gets employee list based off isStaff status
export const getAllEmployees = () => {
    return fetch('http://localhost:8088/users?isStaff=true').then((res) => res.json())
}