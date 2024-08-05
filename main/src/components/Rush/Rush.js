import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, Button } from '@mui/material';
import './Rush.css';
import RushCard from './RushCard';
import stockImage1 from './stockimage1.jpeg';
import stockImage2 from './stockimage2.jpeg';
import Stack from 'react-bootstrap/Stack';
import rush_chairs from './rush_chairs.jpeg';
import phil1 from './philanthropy1.jpeg';
import phil2 from './philanthropy2.jpeg';

const whyrushInfo = {
  header: 'Why Rush',
  backgroundColor: '#CFB53B',
  textColor: 'black',
  imgSrc: stockImage1,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo urna'
}

const leadershipInfo = {
  header: 'Leadership',
  backgroundColor: '#A51C30',
  textColor: 'white',
  imgSrc: rush_chairs,
  description: 'Aliquam vestibulum viverra lectus in fringilla. Vestibulum sagittis lorem quam, vitae sodales mauris ullamcorper eleifend'
}

const serviceInfo = {
  header: 'Service',
  backgroundColor: 'black',
  textColor: 'white',
  imgSrc: phil1,
  description: 'Aliquam vestibulum viverra lectus in fringilla. Vestibulum sagittis lorem quam, vitae sodales mauris ullamcorper eleifend'
}

const communityInfo = {
  header: 'Community',
  backgroundColor: '#023020',
  textColor: 'white',
  imgSrc: phil2,
  description: 'Aliquam vestibulum viverra lectus in fringilla. Vestibulum sagittis lorem quam, vitae sodales mauris ullamcorper eleifend'
}

function Rush() {
  return (
    <Stack>
      <RushCard info = {whyrushInfo} imagePosition="left"/>
      <RushCard info = {leadershipInfo} imagePosition="right"/>
      <RushCard info = {serviceInfo} imagePosition="left"/>
      <RushCard info = {communityInfo} imagePosition="right"/>
    </Stack>
  );
}

export default Rush;
