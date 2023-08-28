import React from "react";
import './UsersList.css';
import UserItem from "../UserItem/UserItem";
import Card from "../../../shared/components/UIElements/Card/Card";

function UsersList(props) {
    return (props.users.length === 0
        ?   <Card>
                <h2>No Users Found</h2>
            </Card>
        : <ul className="users-list">
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
        </ul>)
}

export default UsersList;