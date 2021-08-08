import React from 'react';
import { LogoHeaderContainer, LogoTop } from './style' 
import logo from "../../assets/logoApp.svg";



const LogoHeader = () => {
    return(
        <LogoHeaderContainer>
            <LogoTop src={logo}/>
        </LogoHeaderContainer>
    )
}

export default LogoHeader