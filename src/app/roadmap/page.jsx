"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import supplychain from "../../assets/animation/supplychain.json";
import transpay from "../../assets/transpay.png";
import Image from "next/image";
import solutionbg from "../../assets/solution-bg.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import DnsIcon from "@mui/icons-material/Dns";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SummarizeIcon from "@mui/icons-material/Summarize";

const page = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          position: "relative",
          textAlign: "center",
          py: { lg: 10, sm: 1, xs: 1 },
          px: { lg: 10, sm: 3, xs: 3 },
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${solutionbg.src}), linear-gradient(45deg, #000000,#000000)`,
            backgroundSize: "cover, 100%",
            backgroundRepeat: "no-repeat, repeat",
            backgroundPosition: "center, center",
            filter: "brightness(0.5)", // Adjusts the darkness of the overlay
            zIndex: -1, // Places the overlay behind the content
          },
        }}
      >
        <Grid container>
          <Grid
            item
            lg={12}
            sm={12}
            md={12}
            sx={{
              textAlign: "center",
              py: { lg: 2, sm: 10 },
              pl: { lg: 10, sm: 1, xs: 1 },
              mt: { lg: 5, sm: 3, xs: 3 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { lg: "50px", sm: "40px", xs: "40px" },
                color: "#00DACD",
              }}
            >
              Roadmap
            </Typography>
            <Typography sx={{ color: "white", mt: 2 }}>
              Kaanch will adopt a development approach inspired by the precision
              of glass-making, yielding a blockchain platform recognized for its
              refined design, unmatched user experience, and robust reliability.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default page;
