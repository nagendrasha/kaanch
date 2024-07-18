"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import shifted from "../assets/sifted.png";
import monetary from "../assets/monetary.svg";
import Livedata from "./Livedata";
import coindesk from "../assets/coindesk.svg";
import mycompany from "../assets/mycompany.svg";
import nasdaq from "../assets/nasdaq.svg";
import accelpoint from "../assets/accelpoint.svg";
import FloatingSidebar from "./FloatingSidebar";
import { Grid4x4Outlined } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import crypto from "../assets/crypto.jpg";
import blockchain from "../assets/Blockchain.png";
import bg1 from "../assets/bg1.jpg";
import SlidesComp from "./SlidesComp";
import Typewriter from "typewriter-effect";

const boxes = [
  {
    id: 1,
    title: "Crypto",
    image: crypto,
    desc: "Boba Guys used a Solana-powered loyalty program to increase monthly sales by 67%.",
    link: "https://www.bobaguy.com/",
    aos: "fade-right",
  },
  {
    id: 2,
    title: "Homebase",
    image: blockchain,
    desc: "Homebase used the Solana blockchain to successfully tokenized a single-family rental property.",
    link: "https://www.bobaguy.com/",
    aos: "fade-up",
  },
  {
    id: 3,
    title: "Hivemapper",
    image: crypto,
    desc: "Hivemapper decentralizes mapping with better real-time data and community incentives",
    link: "https://www.bobaguy.com/",
    aos: "fade-left",
  },
];

const features = [
  {
    id: 1,
    img: shifted,
    alt: "shifted",
  },
  {
    id: 2,
    img: monetary,
    alt: "monetary",
  },
  {
    id: 3,
    img: coindesk,
    alt: "coindesk",
  },
  {
    id: 4,
    img: nasdaq,
    alt: "nasdaq",
  },
  {
    id: 4,
    img: accelpoint,
    alt: "accelpoint",
  },
];

const Homepage = () => {

  return (
    <>
      {/* <FloatingSidebar /> */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          py: { lg: "50px", sm: "20px", xs: "20px" },
          px: { lg: "100px", sm: "0px", xs: "0px" },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            py: { lg: "50px", sm: "20px", xs: "20px" },
          }}
        >
          <span style={{ color: "white", fontSize: "40px" }}>
            <Typewriter
              options={{
                strings: ["Kaanch", "Network"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: { lg: "60px", sm: "30px", xs: "30px" },
            }}
            data-aos="fade-right"
          >
            Commanding the future,
            <br /> Unyielding in Trust
          </Typography>
          <br />
          <Typography
            sx={{
              color: "white",
              fontSize: { lg: "20px", sm: "14px", xs: "14px" },
              textAlign: "center",
              p: { lg: "20px", sm: "10px", xs: "10px" },
            }}
          >
            Deploy Web3 apps that are as fast as legacy solutions. Kaanch is a
            layer 1 that enables teams to deploy scalable, secure, low-cost, and{" "}
            ZK privacy-enhanced products across multiple verticals—from DeFi and
            gaming to enterprise.
          </Typography>
        </Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            lg={6}
            sm={12}
            xs={12}
            sx={{
              display: { lg: "block", sm: "flex", xs: "flex" },
              justifyContent: "center",
            }}
          >
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
              Start Building
            </Button>
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
            xs={12}
            sx={{
              mt: { lg: "0px", sm: "10px", xs: "10px" },
              display: { lg: "block", sm: "flex", xs: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                float: { lg: "left" },
                color: "white",
                "&:hover": {
                  background: "white",
                  color: "black",
                },
                p: "15px 30px",
                border: "1px solid white",
                borderRadius: "100px",
              }}
            >
              Get Kaanch
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* featured section */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          sx={{ textAlign: "center", px: { lg: 20, sm: 0, xs: 0 } }}
        >
          <Typography sx={{ mt: 4, color: "white" }}>FEATURED IN</Typography>
          <Marquee style={{ marginTop: "20px" }}>
            {features.map((e) => {
              return (
                <Box sx={{ p: 4 }}>
                  <Image sx={{ m: 2 }} src={e.img} width={150} alt={e.alt} />
                </Box>
              );
            })}
          </Marquee>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          backgroundColor: "black",
          px: { lg: "200px", sm: "0px" },
        }}
      >
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
          }}
        >
          {/* <SlidesComp /> */}
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          px: { lg: 15, sm: 5, xs: 5 },
          py: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item lg={6} data-aos="fade-right">
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: { lg: "50px", sm: "25px", xs: "25px" },
            }}
          >
            Join a community of millions.
          </Typography>
        </Grid>
        <Grid item lg={6} sx={{ mt: 2 }} data-aos="fade-left">
          <Typography
            variant="h1"
            align="left"
            sx={{
              backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              fontSize: { lg: "100px", sm: "50px", xs: "50px" },
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            29.7M
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { lg: "20px", sm: "14px", xs: "14px" },
            }}
          >
            FEE PAYING ACCOUNTS, ALL TIME
          </Typography>
          <Typography
            variant="h1"
            align="left"
            sx={{
              backgroundImage: `linear-gradient(45deg, #006dda, #06c2f1)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              fontSize: { lg: "100px", sm: "50px", xs: "50px" },
              mt: 5,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            340M+
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { lg: "20px", sm: "14px", xs: "14px" },
            }}
          >
            NIFT MINES
          </Typography>
          <Typography
            variant="h1"
            align="left"
            sx={{
              backgroundImage: `linear-gradient(45deg, #4cda00, #06c2f1)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              fontSize: { lg: "100px", sm: "50px", xs: "50px" },
              mt: 5,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            $0.00064
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { lg: "20px", sm: "14px", xs: "14px" },
            }}
          >
            MEDIAN FEE PER TRANSACTION
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ backgroundColor: "black", px: { lg: 15, sm: 2, xs: 2 }, py: 10 }}
      >
        <Grid item lg={4} data-aos="fade-up">
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: { lg: "50px", sm: "25px", xs: "25px" },
            }}
          >
            Made for mass adoption.
          </Typography>
        </Grid>
        <Grid item lg={8} data-aos="fade-up">
          <Livedata />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ backgroundColor: "black", px: { lg: 15, sm: 5, xs: 5 }, py: 5 }}
      >
        <Grid item lg={6} data-aos="fade-up">
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: { lg: "40px", sm: "25px", xs: "25px" },
            }}
          >
            Designed for real world use.
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "100px",
              color: "white",
              border: "1px solid white",
              float: "right",
              mt: { lg: 2, sm: 2, xs: 2 },
            }}
          >
            GO TO CASE STUDIES <ArrowForwardIcon sx={{ color: "white" }} />
          </Button>
        </Grid>
        <Grid
          item
          lg={12}
          sx={{
            position: "relative",
            borderRadius: "20px",
            backgroundImage: `url(${bg1.src})`,
            backgroundSize: "cover",
            backgroundColor: "gray",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            p: 4,
            mt: 2,
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
              zIndex: 1, // Ensure the overlay is above the background but below the content
            },
          }}
          data-aos="zoom-in"
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 2, // Ensure content is above the overlay
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "purple",
                color: "white",
                borderRadius: "100px",
                mb: 2,
              }}
            >
              Case Study
            </Button>
            <Typography variant="h2" sx={{ color: "white", mt: 2 }}>
              XP
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              XP aims to save consumers from high event ticket fees using
              Solana.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "100px",
                border: "1px solid white",
                p: 2,
                mt: 2,
              }}
            >
              <ArrowForwardIcon sx={{ color: "white" }} />
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ backgroundColor: "black", px: { lg: 15, sm: 2, xs: 2 } }}
        
      >
        {boxes.map((e) => (
          <Grid
            key={e.id}
            data-aos="fade-left"
            item
            lg={3.5}
            sx={{
              position: "relative",
              borderRadius: "20px",
              backgroundImage: `url(${e.image.src})`,
              backgroundSize: "cover",
              backgroundColor: "gray",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              p: { lg: 4, sm: 3, xs: 3 },
              mt: 2,
              mx: 2,
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
                zIndex: 1, // Ensure the overlay is above the background but below the content
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "0%",
                background:
                  "linear-gradient(146deg, rgba(0,0,0,0.16150210084033612) 29%, rgba(0,0,0,0.7049194677871149) 100%)",
                zIndex: 2, // Ensure this is above the overlay
              },
              "&:hover::after": {
                height: "100%", // Adjust the height as needed
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 2, // Ensure content is above the overlay
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "purple",
                  color: "white",
                  borderRadius: "100px",
                }}
              >
                {e.title}
              </Button>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
                  {e.title}
                </Typography>
                <Button
                  variant="outlined"
                  small="true"
                  sx={{
                    borderRadius: "100px",
                    border: "1px solid white",
                    p: 1,
                  }}
                >
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </Button>
              </Box>
              <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
                {e.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        sx={{ backgroundColor: "black", p: { lg: 15, sm: 3, xs: 3 } }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            py: 15, px:{lg:10,sm:2,xs:2},
            borderRadius:'20px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center'
           }}
           data-aos="flip-up"
        >
         
          <Typography variant="h2" sx={{ color:'white',fontSize:{lg:'50px',sm:'25px',xs:'25px'} }}>
            It's time to join the thousands of creators, artists, and developers
            using Solana.
          </Typography>
          <Box>
          <Button
              variant="contained"
              sx={{
                color: "white",
                width:200,
                mt:2,
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
              Start Building
            </Button>
            </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
