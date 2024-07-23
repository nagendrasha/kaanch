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
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import DnsIcon from '@mui/icons-material/Dns';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SummarizeIcon from '@mui/icons-material/Summarize';

const solutions = [
  {
    id: 1,
    title: "Supply Chain Management",
    desc: "A consistently synchronized and fast distributed record of the full history of production, logistics, and distribution of supply chains on the Kaanch network.",
    icon: AcUnitIcon,
    link: "/",
  },
  {
    id: 2,
    title: "Notary signatory",
    desc: "An alternative to the need for notary publics where a video recording with all involved parties is secured on a decentralized ledger.",
    icon: DonutSmallIcon,
    link: "/",
  },
  {
    id: 3,
    title: "DNS",
    desc: "A truly decentralized DNS service built into web browsers that bypasses the need for certificates vouching for websites’ legitimacy or to encrypt the connection.",
    icon: DnsIcon,
    link: "/",
  },
  {
    id: 4,
    title: "Asset digitization",
    desc: "Exchanges and transaction validations that are more efficient thanks to the security and speed of the Kaanch network and paperwork automation.",
    icon: PlayLessonIcon,
    link: "/",
  },
  {
    id: 5,
    title: "Game assets",
    desc: "A tokenization system and cross-game item exchange for in-game purchases that broadens options for players and new revenue streams for developers.",
    icon: SportsEsportsIcon,
    link: "/",
  },
  {
    id: 6,
    title: "Transparent public document access",
    desc: "A public-private ledger ensures transparency while guaranteeing the security of sensitive information.",
    icon: SummarizeIcon,
    link: "/",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
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
          <Grid item lg={6} sx={{ textAlign: "left", py: 2, pl: 10, mt: 10 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { lg: "50px", sm: "30px", xs: "30px" },
              color: "#00DACD",
            }}
          >
            Solutions
          </Typography>
          <Typography sx={{ color: "white", mt: 2 }}>
            Kaanch enables businesses, governments, and developers to build new{" "}
            <br />
            solutions that will benefit from using a decentralized architecture.
          </Typography>
          </Grid>
          <Grid item lg={6} sx={{ textAlign: "center" }}>
            <Player
              autoplay
              loop
              src={supplychain}
              style={{ height: "400px", width: "400px" }}
            />
          </Grid>
        </Grid>

        <Grid container>
          {solutions.map((e) => {
            return (
              <Grid item md={4} xs={12} key={e.id}>
                <Card
                  sx={{
                    minWidth: 250,
                    maxHeight:280,
                    m: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    p: 3,
                    borderBottom: "2px solid #00DACD",
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      border: "2px solid #00DACD",
                    },
                  }}
                >
                  <CardContent>
                    <e.icon style={{ fontSize: "50px", color: "#00DACD" }} />
                    <Typography
                      color="white"
                      gutterBottom
                      sx={{ fontSize: "25px" }}
                    >
                      {e.title}
                    </Typography>
                    <Typography
                      sx={{
                        mb: 1.5,
                        mt: 2,
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                      color="white"
                    >
                      {e.desc}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #00DACD",
                        color: "#00DACD",
                        borderRadius: "100px",
                        mt: 2,
                      }}
                    >
                      Go to
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default page;
