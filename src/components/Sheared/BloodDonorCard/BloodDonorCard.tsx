import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { green, red, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  margin: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  overflow: 'hidden',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '40%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 200,
  },
}));

const BloodDonorCard = ({ name, photo, bloodType, location, isAvailable }) => {
  return (
    <StyledCard>
      {photo ? (
        <StyledCardMedia
         // component="img"
          image={photo}
          //alt={`${name}'s photo`}
        />
      ) : (
        <Box
          sx={{
            width: '40%',
            height: 200,
            bgcolor: grey[200],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
              width: '100%',
            },
          }}
        >
          <Avatar sx={{ width: 100, height: 100, bgcolor: grey[400] }}>
            <Typography variant="h3">{name[0]}</Typography>
          </Avatar>
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Blood Type: <strong>{bloodType}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Avatar
            sx={{ bgcolor: isAvailable ? green[500] : red[500], mr: 1 }}
          >
            {isAvailable ? 'A' : 'N'}
          </Avatar>
          <Typography variant="body2" color="text.secondary">
            {isAvailable ? 'Available' : 'Not Available'}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default BloodDonorCard;
