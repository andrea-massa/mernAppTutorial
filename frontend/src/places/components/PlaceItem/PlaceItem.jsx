import React, { useEffect } from "react";
import { useState } from "react";


import Card from "../../../shared/components/UIElements/Card/Card";
import Modal from "../../../shared/components/UIElements/Modal/Modal";
import Map from "../../../shared/components/UIElements/Map/Map";

import './PlaceItem.css'



function PlaceItem(props) {
    const [showMap, setShowMap] = useState(false);

    // Enable and disbale scrolling based on whether the modal is mounted
    useEffect(() => {
        document.body.style.overflow = showMap && "hidden";
        return () => {document.body.style.overflow = "scroll"}
    }, [showMap])

    function openMapHandler(){
        setShowMap(true);
    }
    function closeMapHandler(){
        setShowMap(false);
    }


    return (
        <>
            <Modal 
                show={showMap} 
                onCancel={closeMapHandler} 
                header={props.address} 
                contentClass="place-item__modal-content" 
                footer={<button onClick={closeMapHandler}>CLOSE</button>}
                footerClass="place-item__modal-actions"
            >
                <div className="map-container">
                    <Map coordinates={props.coordinates}/>                    
                </div>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <button onClick={(e) => {openMapHandler()}}>VIEW ON MAP</button>
                        <button>EDIT</button>
                        <button>DELETE</button>
                    </div>
                </Card>
            </li>
        </>
    )
}



export default PlaceItem