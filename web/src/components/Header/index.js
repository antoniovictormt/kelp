import React from 'react';
import {
  HeaderContainter,
  Logo
} from './styles';

import Icone from '../../assets/icone.svg'

export default function Header(props) {
  return (
    <>
      <HeaderContainter>
        <Logo src={Icone} alt="Kelp - Your Url Shortener" />
        <h1>Kelp</h1>
        <p>{props.children}</p>
      </HeaderContainter>
    </>
  )
};
