"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import shifted from "../assets/sifted.png";
import monetary from "../assets/monetary.svg";
import Livedata from "./Livedata";
import FloatingSidebar from "./FloatingSidebar";
import { Grid4x4Outlined } from "@mui/icons-material";

const features = [
  {
    id: 1,
    img: shifted,
    alt: "shifted",
  },
  {
    id: 1,
    img: monetary,
    alt: "monetary",
  },
];

const Homepage = () => {
  return (
    <>
    <FloatingSidebar/>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          py: { lg: "50px", sm: "20px", xs: "20px" },
          px:{lg:'100px',sm:'0px',xs:'0px'}
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            py: { lg: "50px", sm: "20px", xs: "20px" },
          }}
        >
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
        <Grid item lg={12} sm={12} xs={12} sx={{ textAlign: "center" }}>
          <Typography sx={{ mt: 4, color: "white" }}>FEATURED IN</Typography>
          <Marquee style={{ marginTop: "20px" }}>
            {features.map((e) => {
              return (
                <Image sx={{ m: 2 }} src={e.img} width={150} alt={e.alt} />
              );
            })}
          </Marquee>
        </Grid>
      </Grid>

      <Grid container sx={{ backgroundColor: "black", px:{lg:15,sm:5,xs:5}, py: 10,display:'flex',justifyContent:'center' }}>
        <Grid item lg={6} data-aos="fade-right">
          <Typography variant="h3" sx={{ color: "white",fontSize:{lg:'30px',sm:'25px',xs:'25px'} }}>
          Join a community of millions.
          </Typography>
        </Grid>
        <Grid item lg={6} sx={{ mt:2 }} data-aos="fade-left">
          <Typography
            variant="h1"
            align="left"
            sx={{
              backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              fontSize:{lg:'100px',sm:'50px',xs:'50px'},
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            29.7M
          </Typography>
          <Typography variant="h6" sx={{ color: "white",fontSize:{lg:'20px',sm:'14px',xs:'14px'} }}>
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
              fontSize:{lg:'100px',sm:'50px',xs:'50px'},
              mt: 5,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            340M+
          </Typography>
          <Typography variant="h6" sx={{ color: "white",fontSize:{lg:'20px',sm:'14px',xs:'14px'} }}>
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
              fontSize:{lg:'100px',sm:'50px',xs:'50px'},
              mt: 5,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            $0.00064
          </Typography>
          <Typography variant="h6" sx={{ color: "white",fontSize:{lg:'20px',sm:'14px',xs:'14px'} }}>
            MEDIAN FEE PER TRANSACTION
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ backgroundColor: "black", px:{lg:15,sm:2,xs:2}, py: 10 }}>
        <Grid item lg={4} data-aos="fade-up">
          <Typography variant="h3" sx={{ color: "white" }}>
          Made for mass <br /> adoption.
          </Typography>
        </Grid>
        <Grid item lg={8} data-aos="fade-up">
          <Livedata/>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
