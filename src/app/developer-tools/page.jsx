"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import devtools from "../../assets/dev-tools.png";
import solutionbg from "../../assets/solution-bg.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import DnsIcon from "@mui/icons-material/Dns";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SummarizeIcon from "@mui/icons-material/Summarize";



const solutions = [
    {
      id: 1,
      title: "Smart contracts",
      desc: "Fast, secure, and Turing-complete smart contracts for applications that require high computing power for high-scale services.",
      icon: AcUnitIcon,
      link: "/",
    },
    {
      id: 2,
      title: "Automatic payments and shared revenue agreement",
      desc: "Scalable dApps that automate payments and bring transparency and efficiency to revenue sharing models.",
      icon: DonutSmallIcon,
      link: "/",
    },
    {
      id: 3,
      title: "Wallet & DEX",
      desc: "A true universal wallet for cryptocurrencies is one of the major directions of Aleph Zero development. Under development by Cardinal Cryptography.",
      icon: DnsIcon,
      link: "/",
    },
    {
      id: 4,
      title: "Supply chain management",
      desc: "A consistently synchronized and fast distributed record of the full history of production, logistics, and distribution of supply chains on the Aleph Zero network.",
      icon: PlayLessonIcon,
      link: "/",
    }
  ];

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
        <Grid
          item
          lg={12}
          sx={{ textAlign: "center", py: 5, px: { lg: 15, sm: 5, xs: 2 } }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontSize: { lg: "55px", sm: "40px", xs: "40px" },
              color: "#00DACD",
            }}
          >
            Developers Tools
          </Typography>
          <Typography sx={{ color: "white", mt: 2 }}>
            Learn all about building on Aleph Zero.
          </Typography>
        </Grid>
        <Grid container sx={{ px: 10 }}>
          <Grid
            item
            lg={6}
            sm={6}
            xs={12}
            sx={{
              textAlign: { lg: "left", xs: "center" },
              py: 2,
              pl: { lg: 10, sm: 2, xs: 2 },
              mt: { lg: 15, xs: 5 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontSize: { lg: "50px", sm: "50px", xs: "30px" },
              }}
            >
              Into Aleph Zero
            </Typography>
            <Typography sx={{ color: "white", mt: 2 }}>
              Aleph Zero is a layer 1 blockchain with a highly scalable
              architecture with its own AlephBFT consensus mechanism.
              <br /> <br />
              Its sub-second finality makes for seamless experiences for users,
              while the network remains secure and decentralized.
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12} sx={{ textAlign: "center", py: 2 }}>
            <Image
              src={devtools}
              style={{
                height: { lg: "500px", sm: "400px", xs: "200px" },
                width: { lg: "500px", sm: "400px", xs: "200px" },
              }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ px: 10 }} data-aos="fade-up">
          {solutions.map((e) => {
            return (
              <Grid item lg={3} md={6} sm={6} xs={12} key={e.id}>
                <Card
                  sx={{
                    minWidth: 250,
                    maxHeight: { lg: 350, sm: 300, xs: 300 },
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

export default Page;
