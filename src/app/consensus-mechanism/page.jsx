"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import legal from "../../assets/legal.png";
import market from "../../assets/market.png";
import operation from "../../assets/operation.png";
import tech from "../../assets/tech.png";
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
    title: "Staking",
    desc: "Participants in the Kaanch network can stake their Kaanch Coins (KCN) to become validators. Staking involves locking up a certain amount of KCN as collateral, which helps secure the network.",
    icon: AcUnitIcon,
    link: "/",
  },
  {
    id: 2,
    title: "Selection of Validators",
    desc: "Validators are selected based on the amount of KCN they have staked and the duration of their stake. This incentivizes long-term commitment and ensures that validators have a vested interest in maintaining network integrity.",
    icon: DonutSmallIcon,
    link: "/",
  },
  {
    id: 3,
    title: "Rewards",
    desc: "Validators earn rewards in the form of KCN for validating transactions and creating new blocks. This encourages active participation and aligns the interests of validators with the health of the network.",
    icon: DnsIcon,
    link: "/",
  },
  {
    id: 4,
    title: "Authority Nodes",
    desc: "In addition to staked validators, Kaanch employs a limited number of authority nodes. These nodes are run by reputable entities within the community, ensuring an additional layer of trust and security.",
    icon: PlayLessonIcon,
    link: "/",
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
              Consensus Mechanism
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "20px", sm: "14px", xs: "14px" },
                color: "white",
                textAlign: "center",
              }}
            >
              A consensus mechanism is the process by which a blockchain network
              reaches agreement on the state of the ledger. It ensures that all
              transactions are validated, recorded, and agreed upon by all
              participants in a decentralized manner.
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
              Our Hybrid Consensus Model
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "white" }}>
              Kaanch utilizes a proprietary hybrid consensus model known as
              Proof of Transparency (PoT). This innovative mechanism combines
              elements of Proof of Stake (PoS) and Proof of Authority (PoA) to
              create a system that is both efficient and secure. Here’s how it
              works:
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

        <Grid container sx={{ mt: 4 }}>
          {solutions.map((e) => {
            return (
              <Grid item lg={3} md={6} sm={6} xs={12} key={e.id}>
                <Card
                  sx={{
                    minWidth: 250,
                    maxHeight: { lg: 350, sm: 300, xs: 300 },
                    m: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    p: 1,
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
