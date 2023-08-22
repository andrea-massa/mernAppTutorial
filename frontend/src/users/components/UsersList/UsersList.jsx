import React from "react";
import './UsersList.css';
import UserItem from "../UserItem/UserItem";

function UsersList(props) {
    if (props.users.length === 0) {
        return (
            <div>
                <h2>No Users Found</h2>
            </div>
        )
    } else {
        return (
            <ul className="users-list">
                {props
                    .users
                    .map((element, index) => {
                        return <UserItem
                            key={element.id}
                            id={element.id}
                            image={element.image}
                            name={element.name}
                            placeCount={element.placeCount}/>
                    })}
            </ul>
        )
    }
}

export default UsersList;