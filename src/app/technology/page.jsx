"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import blockchain from "../../assets/animation/blockchain.json";
import transpay from "../../assets/transpay.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Grid item sx={{ textAlign: "center", py: 5, px: 50 }}>
          <Typography
            variant="h1"
            align="left"
            sx={{
              backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              fontSize: { lg: "40px", sm: "30px", xs: "30px" },
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Technology
          </Typography>
          <Typography sx={{ color: "white", mt: 2 }}>
            Learn all about building on Kaanch.
          </Typography>
        </Grid>
        <Grid container>
          <Grid item lg={6} sx={{ textAlign: "left", py: 2, pl: 10, mt: 15 }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              How Blockchain Works
            </Typography>
            <Typography sx={{ color: "white", mt: 2 }}>
              Blockchain is a decentralized ledger that records transactions
              across multiple computers so that the record cannot be altered
              retroactively without the alteration of all subsequent blocks.
              This provides a robust solution to security and trust issues.
            </Typography>
          </Grid>
          <Grid item lg={6} sx={{ textAlign: "center" }}>
            <Player
              autoplay
              loop
              src={blockchain}
              style={{ height: "500px", width: "500px" }}
            />
          </Grid>
        </Grid>

        <Grid container data-aos="fade-up">
          <Grid item lg={6} sx={{ textAlign: "center" }}>
            <Image
              src={transpay}
              style={{ height: "500px", width: "500px" }}
              alt=""
            />
          </Grid>
          <Grid item lg={6} sx={{ textAlign: "left", py: 2, pl: 10, mt: 15 }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              The Future of Transparent Transactions
            </Typography>
            <Typography sx={{ color: "white", mt: 2 }}>
              At Kaanch, we are revolutionizing the way transactions are
              conducted, ensuring transparency, security, and efficiency with
              our state-of-the-art blockchain technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default page;
