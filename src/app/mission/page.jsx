"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import blockchain from "../../assets/animation/blockchain.json";
import transpay from "../../assets/transpay.png";
import Image from "next/image";
import missionbg from "../../assets/missionbg2.jpg";

const page = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          py: 10,
          px: 10,
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
              backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              fontSize: { lg: "50px", sm: "30px", xs: "30px" },
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
           We Elevate Brands With <br />
           Exceptional Digital AI
          </Typography>
          <Typography sx={{ color: "white", mt: 2 }}>
            Here you will find a thorough overview of the technical aspects of
            the AZERO <br /> coin that are crucial for the functioning of the entire
            Kaanch ecosystem.
          </Typography>
        </Grid>

        <Grid container sx={{ mt:10}} data-aos="fade-up">
          <Grid item xs={12} md={6} sx={{textAlign:'left'}}>
            <Typography variant="h3" sx={{color:"white",pl:1,color:'#00DACD'}} >Our Mission</Typography>
            <Typography sx={{ color:"white", mt: 2,px:2 }}>
              The AZERO coin is a cryptocurrency that is designed to be used as
              a medium of exchange for goods and services within the Kaanch
              ecosystem. It is built on the Ethereum blockchain and uses the
              ERC-20 token standard. The AZERO coin is designed to be used as a
              means of payment for goods and services within the Kaanch
              ecosystem.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{textAlign:'left'}}>
            <Typography variant="h3" sx={{color:"white",pl:1,color:'#00DACD'}} >Our Vision</Typography>
            <Typography sx={{ color:"white", mt: 2,px:2 }}>
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

      <Grid container sx={{ backgroundColor:'black',px:10 }}>
        <Grid item md={3} xs={12}>
        <Card
            sx={{
              minWidth: 250,
              m: 2,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              p: 2,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography color="white" gutterBottom sx={{ fontSize: "40px" }}>
                <span
                  style={{
                    borderLeft: `4px solid red`,
                    paddingLeft: "8px",
                  }}
                >
                  Circulating supply
                </span>
              </Typography>
              <Typography sx={{ mb: 1.5, mt: 3 }} color="white">
              314,871,854
              </Typography>
              <Typography variant="h5" sx={{ mt: 2 }}>
                {/* <FiberManualRecordIcon
                  sx={{ fontSize: "10px", color: e.color }}
                />{" "}
                {e.number} */}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography sx={{ color: "gray" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dolores.
              </Typography>
            </CardActions>
          </Card>

        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default page;
