import React from "react";
import PlaceList from "../../components/PlaceList/PlaceList";

import {useParams} from "react-router-dom";

import './UserPlaces.css'

const DUMMY_PLACES = [
    {
        id: 'p1',
        creator: 'u1',
        title: 'Empire State Building',
        description: 'One of the most famous places on Earth',
        imageUrl: 'https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.748817,
            lng: -73.985428
        }
    }, {
        id: 'p2',
        creator: 'u2',
        title: 'Empire State Building 2 lol',
        description: 'One of the most famous places on Earth 2 lol',
        imageUrl: 'https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.748817,
            lng: -73.985428
        }
    }
]

function UserPlaces() {
    const userId = useParams().userId;
    const filteredPlaces = DUMMY_PLACES.filter((place, index) => {
        return place.creator === userId
    })
    return (
        <PlaceList items={filteredPlaces}></PlaceList>
    )
}

export default UserPlaces;