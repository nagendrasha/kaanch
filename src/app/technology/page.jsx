"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import blockchain from "../../assets/animation/blockchain.json";
import transpay from "../../assets/transpay.png";
import Image from "next/image";

const Page = () => {
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
        <Grid item lg={12} sx={{ textAlign: "center", py: 5, px: { lg: 10, sm: 5, xs: 2 } }}>
          <Typography
            variant="h1"
            align="left"
            sx={{
              backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              fontSize: { lg: "40px", sm: "40px", xs: "40px" },
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
          <Grid item lg={6} sm={6} xs={12} sx={{ textAlign: { lg: "left", xs: "center" }, py: 2, pl: { lg: 10, sm: 2, xs: 2 }, mt: { lg: 15, xs: 5 } }}>
            <Typography variant="h4" sx={{ color: "white",fontSize:{lg:'50px',sm:'50px',xs:'30px'} }}>
              How Blockchain Works
            </Typography>
            <Typography sx={{ color: "white", mt: 2 }}>
              Blockchain is a decentralized ledger that records transactions
              across multiple computers so that the record cannot be altered
              retroactively without the alteration of all subsequent blocks.
              This provides a robust solution to security and trust issues.
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12} sx={{ textAlign: "center", py: 2 }}>
            <Player
              autoplay
              loop
              src={blockchain}
              style={{ height: { lg: '500px', sm: '400px', xs: '200px' }, width: { lg: '500px', sm: '400px', xs: '200px' } }}
            />
          </Grid>
        </Grid>

        <Grid container data-aos="fade-up">
          <Grid item lg={6} xs={12} sx={{ textAlign: "center", py: 2 }}>
            <Image
              src={transpay}
              width={300}
              height={300}
              alt="Transparent Transactions"
            />
          </Grid>
          <Grid item lg={6} xs={12} sx={{ textAlign: { lg: "left", xs: "center" }, py: 2, pl: { lg: 10, sm: 5, xs: 2 }, mt: { lg: 15, xs: 5 } }}>
            <Typography variant="h4" sx={{ color: "white",fontSize:{lg:'50px',sm:'50px',xs:'30px'} }}>
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

export default Page;
