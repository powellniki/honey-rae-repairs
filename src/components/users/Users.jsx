import "./Users.css"

export const Users = ({ user }) => {

    return (
        <div className="user" key="user">
            <div>
                <div className="user-info">name:</div>
                <div>{user.fullName}</div>
            </div>
            <div>
                <div className="user-info">email:</div>
                <div>{user.email}</div>
            </div>
        </div>
    )
}
