import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const WideCard = styled(Card)({
  maxWidth: 800,
  margin: '20px auto',
});

const StyledCardMedia = styled(CardMedia)({
  width: 200, // Adjust the width as needed
  height: 200, // Fixed height to keep the aspect ratio
  objectFit: 'cover',
});

const AlumniCard = ({ person }) => {
  return (
    <WideCard>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <StyledCardMedia
              component="img"
              image={person.image}
              alt={`${person.name}'s photo`}
            />
            <Box mt={2}>
              <Typography variant="subtitle1" color="text.secondary">
                Pledge Class: {person.pledgeClass}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Major: {person.major}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              {person.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {person.description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </WideCard>
  );
};

export default AlumniCard;
