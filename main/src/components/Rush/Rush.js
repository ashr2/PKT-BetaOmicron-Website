import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, Button } from '@mui/material';
import './Rush.css';
import RushCard from './RushCard';
import stockImage1 from './stockimage1.jpeg';
import stockImage2 from './stockimage2.jpeg';
import Stack from 'react-bootstrap/Stack'

const whyrushInfo = {
  header: 'Why Rush',
  backgroundColor: 'red',
  textColor: 'white',
  imgSrc: stockImage1,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo urna'
}

const leadershipInfo = {
  header: 'Why Rush',
  backgroundColor: 'blue',
  textColor: 'black',
  imgSrc: stockImage2,
  description: 'Aliquam vestibulum viverra lectus in fringilla. Vestibulum sagittis lorem quam, vitae sodales mauris ullamcorper eleifend'
}

function Rush() {
  return (
    <Stack>
      <RushCard info = {whyrushInfo} imagePosition="left"/>
      <RushCard info = {leadershipInfo} imagePosition="right"/>
    </Stack>
  );
}

export default Rush;
