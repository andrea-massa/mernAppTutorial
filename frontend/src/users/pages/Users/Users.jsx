import React from "react";
import './Users.css';
import UsersList from "../../components/UsersList/UsersList";

function Users() {
    let users = [
        {
            id: 'u1',
            name: 'amassa1',
            image: 'https://picsum.photos/200',
            placeCount: 1
        }, {
            id: 'u2',
            name: 'isabellaroose1',
            image: 'https://picsum.photos/200',
            placeCount: 1
        }
    ];
    return (
        <div className="Users">
            <h1>Users</h1>
            <UsersList users={users}/>
        </div>
    )
}

export default Users