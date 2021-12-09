import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
margin:10%;
border: 2px solid black;
padding: 10%;

transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${pr => pr.theme.primaryColor};
    

  }

`
export default function Body(props) {
    const picture = props
    return (

       
       <StyledDiv>
            <h3>{props.data.title}</h3>
            <i>{props.data.date}</i>
            <p></p>
            <img src = {props.data.url} alt = 'Space' width = '500' height= '500'/>
            <p>{props.data.explanation}</p>
            <b>{props.data.copyright}</b>
     </StyledDiv> 
    )
}