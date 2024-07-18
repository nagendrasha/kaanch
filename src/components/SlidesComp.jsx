import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import crypto from "../assets/crypto.jpg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 1 },
};

const items = [
  <Grid
    container
    className="item"
    data-value="1"
    sx={{
      display: "flex",
      justifyContent: "center",
      px: { lg: "100px", sm: "20px" },
    }}
  >
    <Grid item xs={12} md={6}>
      <Image src={crypto} width={300} alt="crypto" />
    </Grid>
    <Grid item xs={12} md={6}>
      <Button
        variant="contained"
        sx={{
          float: { lg: "right" },
          color: "white",
          p: "15px 30px",
          borderRadius: "100px",
          mr: "10px",
          "&:hover": {
            background: "white",
            color: "black",
          },
          background:
            "linear-gradient(108deg, rgba(0,218,205,1) 54%, rgba(0,0,0,1) 100%)",
        }}
      >
        Solution
      </Button>
      <Typography>
        Blinks and Actions Put ‘Crypto Back in Crypto Twitter’
      </Typography>
      <Typography>
        From Decrypt: “The new features will allow users to connect and send
        transactions without having to leave the website they are currently on.”
      </Typography>
    </Grid>
  </Grid>,
  <div className="item" data-value="2">
    2
  </div>,
  <div className="item" data-value="3">
    3
  </div>,
  <div className="item" data-value="4">
    4
  </div>,
  <div className="item" data-value="5">
    5
  </div>,
];

const SlidesComp = () => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </>
  );
};

export default SlidesComp;
