"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import solutionbg from "../../assets/solution-bg.jpg";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { FaCoins } from "react-icons/fa";

const matrics = [
  {
    id: 1,
    title: "Total Supply",
    value: "0xa241605a78e7a34fe19fda",
    icon: SettingsIcon,
    aos:'fade-up'
  },
  {
    id: 2,
    title: "Total Account",
    value: "5223",
    icon: AnalyticsIcon,
    aos:'fade-up'
  },
  {
    id: 3,
    title: "Total Block",
    value: "34149062",
    icon: ViewInArIcon,
    aos:'fade-up'
  },
  {
    id: 4,
    title: "Total Transaction",
    value: "63240898",
    icon: PriceCheckIcon,
    aos:'fade-up'
  },
  {
    id: 5,
    title: "Actively Staked",
    value: "120756775.11",
    icon: MonetizationOnIcon,
    aos:'fade-up'
  },
  {
    id: 6,
    title: "Active Validators",
    value: "3781",
    icon: VerifiedIcon,
    aos:'fade-up'
  },
  {
    id: 7,
    title: "Current Node",
    value: "10193",
    icon: OpenInBrowserIcon,
    aos:'fade-up'
  },
  {
    id: 8,
    title: "Total Token",
    value: "155",
    icon: FaCoins,
    aos:'fade-up'
  },
];

const Page = () => {
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
          <Grid item xs={12} lg={12} sx={{ textAlign: "center", py: 4 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { lg: "50px", sm: "40px", xs: "40px" },
                color: "#00DACD",
                textAlign: "center",
              }}
            >
              Performance Matrics
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          {matrics.map((e) => {
            return (
              <Grid item lg={4} md={6} sm={6} xs={12} key={e.id} data-aos={e.aos}>
                <Card
                  sx={{
                    minWidth: 250,
                    maxHeight: { lg: 280, sm: 300, xs: 300 },
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
                    <e.icon style={{ fontSize: "70px", color: "#00DACD" }} />
                    <Typography
                      color="white"
                      gutterBottom
                      sx={{ fontSize: { lg: "35px", sm: "30px", xs: "30px" } }}
                    >
                      {e.title}
                    </Typography>
                    <Typography
                      sx={{
                        mb: 1.5,
                        mt: 2,
                        fontSize: { lg: "20px", sm: "20px", xs: "20px" },
                        fontWeight: "300",
                      }}
                      color="white"
                    >
                      {e.value}
                    </Typography>
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
