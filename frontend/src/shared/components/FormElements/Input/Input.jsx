import React from "react";
import {useReducer} from "react";
import './Input.css'

function Input(props) {


    const element = props.element === 'input'
        ? <input
            id="props.id"
            type="props.type"
            name="props.name"
            onChange={changeHandler}/>
        : <textarea
            id="props.id"
            type="props.type"
            name="props.name"
            rows={props.row || 3}
            onChange={changeHandler}/>


    function changeHandler(event) {

    }



    return (
        <div className={`form-control`}>
            <label htmlFor="">{props.label}:</label>
            {element}
        </div>
    )
}

export default Input;