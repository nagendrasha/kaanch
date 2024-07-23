"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import blockchain from "../../assets/animation/blockchain.json";
import transpay from "../../assets/transpay.png";
import Image from "next/image";
import missionbg from "../../assets/missionbg2.jpg";

const metrics = [
  {
    id: 1,
    title: "Ticker",
    value: "Kaanch",
    aos: "fade-left",
  },
  {
    id: 2,
    title: "Type",
    value: "Utility",
    aos: "fade-up",
  },
  {
    id: 3,
    title: "Circulating supply",
    value: "314,871,854",
    aos: "fade-down",
  },
  {
    id: 4,
    title: "Total supply",
    value: "361,936,949",
    aos: "fade-right",
  },
  {
    id: 5,
    title: "% Staked",
    value: "70%",
    aos: "fade-left",
  },
  {
    id: 6,
    title: "# of Wallets",
    value: "219,000",
    aos: "fade-up",
  },
  ,
  {
    id: 7,
    title: "Inflation",
    value: "30,000,000/Yr",
    aos: "fade-down",
  },
  ,
  {
    id: 8,
    title: "Volume",
    value: "$2,818,870",
    aos: "fade-right",
  },
  {
    id: 9,
    title: "Market cap",
    value: "$311,001,732",
    aos: "fade-up",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          py: { lg: 10, sm: 3, xs: 3 },
          px: { lg: 10, sm: 2, xs: 2 },
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${missionbg.src}), linear-gradient(45deg, #000000,#000000)`,
            backgroundSize: "cover, 100%",
            backgroundRepeat: "no-repeat, repeat",
            backgroundPosition: "center, center",
            filter: "brightness(0.5)", // Adjusts the darkness of the overlay
            zIndex: -1, // Places the overlay behind the content
          },
        }}
      >
        <Grid item>
          <Typography
            variant="h1"
            sx={{
              // backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
              // backgroundSize: "100%",
              // backgroundRepeat: "repeat",
              fontSize: { lg: "50px", sm: "40px", xs: "35px" },
              // backgroundClip: "text",
              // WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
              color:"#00DACD"
            }}
          >
            We Elevate Brands With <br />
            Exceptional Digital AI
          </Typography>
          <Typography sx={{ color: "white", mt: 2 }}>
            Here you will find a thorough overview of the technical aspects of
            the AZERO <br /> coin that are crucial for the functioning of the
            entire Kaanch ecosystem.
          </Typography>
        </Grid>

        <Grid container sx={{ mt: 10 }} data-aos="fade-up">
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                pl: 1,
                color: "#00DACD",
                fontSize: { lg: "50px", sm: "40px", sm: "35px" },
              }}
            >
              Our Mission
            </Typography>
            <Typography sx={{ color: "white", mt: 2, px: 2 }}>
              The AZERO coin is a cryptocurrency that is designed to be used as
              a medium of exchange for goods and services within the Kaanch
              ecosystem. It is built on the Ethereum blockchain and uses the
              ERC-20 token standard. The AZERO coin is designed to be used as a
              means of payment for goods and services within the Kaanch
              ecosystem.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                pl: 1,
                color: "#00DACD",
                fontSize: { lg: "50px", sm: "40px", sm: "35px" },
              }}
            >
              Our Vision
            </Typography>
            <Typography sx={{ color: "white", mt: 2, px: 2 }}>
              The AZERO coin is a cryptocurrency that is designed to be used as
              a medium of exchange for goods and services within the Kaanch
              ecosystem. It is built on the Ethereum blockchain and uses the
              ERC-20 token standard. The AZERO coin is designed to be used as a
              means of payment for goods and services within the Kaanch
              ecosystem.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        sx={{
          backgroundColor: "black",
          px:{lg:10,sm:2,xs:2},
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {metrics.map((e) => {
          return (
            <Grid item md={3} xs={12} key={e.id}>
              <Card
                sx={{
                  minWidth: 240,
                  m: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  p: 3,
                  borderBottom:'2px solid #00DACD',
                  borderRadius: 2,
                  '&:hover':{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border:'2px solid #00DACD'
                  }
                }}
              >
                <CardContent>
                  <Typography
                    color="white"
                    gutterBottom
                    sx={{ fontSize: "35px" }}
                  >
                    {e.value}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, mt: 3, fontSize: "20px", fontWeight: "300" }}
                    color="white"
                  >
                    {e.title}
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 2 }}></Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </>
  );
};

export default page;
