import React, { useState } from "react";
import  styled from "styled-components"
import {useNavigate} from "react-router-dom"
import logo from "../assests/logo2.png";
export default function Header(props){
  const navigate = useNavigate()
  
  return(
       <StyledHeader className="flex a-center j-between">
              <div className="logo">
      <img src={logo} alt="logo"/>
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </StyledHeader>
  )
}
const StyledHeader= styled.header`
padding: 0 7rem;

.logo {
  img {
    height: 3rem;
    padding-top:20px;
  }
}
button {
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;
}
`;