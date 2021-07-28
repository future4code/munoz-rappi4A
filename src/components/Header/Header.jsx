import React from 'react';
import { useHistory } from 'react-router-dom';

import BackButton from '../../assets/back.svg';
import { HeaderContainer, Title } from './style';

export function Header(props) {

  const history = useHistory()

  const goToPreviousPage = () => {
    history.goBack()
  }

  return (
    <HeaderContainer>
      {props.showBackBtn ?
        <img src={BackButton} alt="logo" onClick={goToPreviousPage}/>
        :
        <div></div>
      }
      <Title>{props.title}</Title>
      <div></div>
    </HeaderContainer>
  )
}