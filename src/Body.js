import React from "react";

export default function Body(props) {
    const picture = props
    return (
       <div className = 'Picure'>
            <h3>{props.data.title}</h3>
            <i>{props.data.date}</i>
            <p></p>
            <img src = {props.data.url} alt = 'Space' width = '500' height= '500'/>
            <p>{props.data.explanation}</p>
            <b>{props.data.copyright}</b>
       </div> 
    )
}