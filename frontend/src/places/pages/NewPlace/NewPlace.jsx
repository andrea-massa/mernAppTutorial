import React from "react";
import {Fragment} from "react";
import './NewPlace.css';
import Input from "../../../shared/components/FormElements/Input/Input";

function NewPlace() {
    return (
        <Fragment>
            <h1>New Place</h1>
            <form className="place-form">
                <Input 
                    element="input" 
                    type="text" 
                    label="Title" 
                    id="title" 
                    name="title"/>
            </form>
        </Fragment>
    )
}

export default NewPlace