"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import solutionbg from "../../assets/solution-bg.jpg";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { FaCoins } from "react-icons/fa";
import tech from "../../assets/tech.png";
import operation from "../../assets/operation.png";
import legal from "../../assets/legal.png";
import market from "../../assets/market.png";
import Image from "next/image";

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

const Page = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          //   position: "relative",
          textAlign: "center",
          py: { lg: 10, sm: 1, xs: 1 },
          px: { lg: 10, sm: 3, xs: 3 },
          //   overflow: "hidden",
          //   "::before": {
          //     content: '""',
          //     position: "absolute",
          //     top: 0,
          //     left: 0,
          //     width: "100%",
          //     height: "100%",
          //     backgroundImage: `url(${solutionbg.src}), linear-gradient(45deg, #000000,#000000)`,
          //     backgroundSize: "cover, 100%",
          //     backgroundRepeat: "no-repeat, repeat",
          //     backgroundPosition: "center, center",
          //     filter: "brightness(0.5)", // Adjusts the darkness of the overlay
          //     zIndex: -1, // Places the overlay behind the content
          //   },
          backgroundColor: "black",
        }}
      >
        <Grid container>
          <Grid item xs={12} lg={12} sx={{ textAlign: "center", py: 4 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { lg: "50px", sm: "40px", xs: "40px" },
                color: "#00DACD",
                textAlign: "center",
              }}
            >
              Tokenomics
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "20px", sm: "14px", xs: "14px" },
                color: "white",
                textAlign: "center",
              }}
            >
              To ensure a fair and balanced distribution of tokens, Kaanch has
              implemented a strategic <br /> allocation plan. Here is a detailed
              look at how our tokens are distributed:
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2, px: 2 }}>
          <Grid
            item
            lg={6}
            sm={6}
            xs={6}
            sx={{ textAlign: "left", mt: 4 }}
            data-aos="fade-right"
          >
            <Typography sx={{ fontSize: "50px", color: "white" }}>
              Development and Technology
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "white" }}>
              Continuous enhancement of our blockchain infrastructure
              Integration of advanced features and security protocols
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
          </Grid>
          <Grid item lg={6} sm={6} xs={6} data-aos="fade-left">
            <Image src={tech} width={400} alt="tech" />
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2, px: 2 }}>
          <Grid item lg={6} sm={6} xs={6} data-aos="fade-left">
            <Image src={market} width={400} alt="market" />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xs={6}
            sx={{ textAlign: "left", mt: 4 }}
            data-aos="fade-right"
          >
            <Typography sx={{ fontSize: "50px", color: "white" }}>
              Marketing and Community Building
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "white" }}>
              Global campaigns to raise awareness and adoption Community events,
              meetups, and educational programs
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
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2, px: 2 }}>
          <Grid
            item
            lg={6}
            sm={6}
            xs={6}
            sx={{ textAlign: "left", mt: 4 }}
            data-aos="fade-right"
          >
            <Typography sx={{ fontSize: "50px", color: "white" }}>
              Operations and Business Development
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "white" }}>
              Expansion of our team and operational capabilities Strategic
              partnerships and collaborations
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
          </Grid>
          <Grid item lg={6} sm={6} xs={6} data-aos="fade-left">
            <Image src={operation} width={400} alt="market" />
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2, px: 2 }}>
          <Grid item lg={6} sm={6} xs={6} data-aos="fade-left">
            <Image src={legal} width={400} alt="market" />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xs={6}
            sx={{ textAlign: "left", mt: 4 }}
            data-aos="fade-right"
          >
            <Typography sx={{ fontSize: "50px", color: "white" }}>
              Legal and Compliance
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "white" }}>
              Ensuring adherence to global regulatory standards Legal advisory
              and compliance costs
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
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 4 }}>
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
      </Grid>
      <Footer />
    </>
  );
};

export default Page;
