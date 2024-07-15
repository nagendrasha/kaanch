import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const BackgroundVideo = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        width: '100%',
        zIndex: -1
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
          objectFit: 'cover'
        }}
      >
        <source src="path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Grid container sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" color="white">FEATURED IN</Typography>
      </Grid>
    </Box>
  );
};

export default BackgroundVideo;
