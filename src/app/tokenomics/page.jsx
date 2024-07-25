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
      <Grid container sx={{ backgroundColor: "black", px: 5 }}>
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

      {/* <Grid container sx={{ backgroundColor: "black", px: 5 }}>
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
            Continuous enhancement of our blockchain infrastructure Integration
            of advanced features and security protocols
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
          <Image src={tech} width={300} alt="tech" />
        </Grid>
      </Grid> */}

      <Grid
        container
        sx={{
          backgroundColor: "black",
          px: { lg: 5, sm: 2, xs: 2 },
          py: { xs: 2 },
        }}
      >
        <Grid item lg={6} sm={6} xs={12} data-aos="fade-left">
          <Image
            src={market}
            alt="market"
            style={{ width: "100%" }}
            sx={{
              width: {
                lg: "400px",
                sm: "300px",
                xs: "100%",
              },
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xs={12}
          sx={{ textAlign: { xs: "center", sm: "left" }, mt: { lg: 4, xs: 2 } }}
          data-aos="fade-right"
        >
          <Typography
            sx={{
              fontSize: { lg: "40px", sm: "30px", xs: "24px" },
              color: "white",
            }}
          >
            Marketing and Community Building
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "20px", sm: "14px", xs: "12px" },
              color: "white",
              mt: { xs: 1 },
            }}
          >
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

      <Grid
        container
        sx={{
          backgroundColor: "black",
          px: { lg: 5, sm: 2, xs: 2 },
          py: { xs: 2 },
        }}
      >
        <Grid
          item
          lg={6}
          sm={6}
          xs={12}
          sx={{ textAlign: { xs: "center", sm: "left" }, mt: { lg: 4, xs: 2 } }}
          data-aos="fade-right"
        >
          <Typography
            sx={{
              fontSize: { lg: "50px", sm: "40px", xs: "30px" },
              color: "white",
            }}
          >
            Operations and Business Development
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "20px", sm: "16px", xs: "14px" },
              color: "white",
              mt: { xs: 1 },
            }}
          >
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
        <Grid item lg={6} sm={6} xs={12} data-aos="fade-left">
          <Image
            src={operation}
            alt="market"
            style={{ width: "100%", height: "auto" }}
            sx={{
              maxWidth: {
                lg: "400px",
                sm: "300px",
                xs: "100%",
              },
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          backgroundColor: "black",
          px: { lg: 5, sm: 2, xs: 2 },
          py: { xs: 2 },
        }}
      >
        <Grid item lg={6} sm={6} xs={12} data-aos="fade-left">
          <Image
            src={legal}
            alt="market"
            style={{ width: "100%", height: "auto" }}
            sx={{
              maxWidth: {
                lg: "400px",
                sm: "300px",
                xs: "100%",
              },
            }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xs={12}
          sx={{ textAlign: { xs: "center", sm: "left" }, mt: { lg: 4, xs: 2 } }}
          data-aos="fade-right"
        >
          <Typography
            sx={{
              fontSize: { lg: "50px", sm: "40px", xs: "30px" },
              color: "white",
            }}
          >
            Legal and Compliance
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "20px", sm: "16px", xs: "14px" },
              color: "white",
              mt: { xs: 1 },
            }}
          >
            Ensuring adherence to global regulatory standards Legal advisory and
            compliance costs
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

      <Grid container sx={{ backgroundColor: "black", px: 5 }}>
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
                  borderBottom: "2px solid #00DACD",
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "2px solid #00DACD",
                  },
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

export default Page;
