import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import about from "../../assets/about.png";

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
          <Typography variant="h4" sx={{ color: "white" }} data-aos="fade-left">
            About Us
          </Typography>
          <Typography sx={{ color: "white" }}>
            Before we can make truly groundbreaking, decentralized products, we
            need to build a scalable, decentralized, secure, and
            privacy-enhancing infrastructure.
          </Typography>
        </Grid>
      </Grid>

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
          lg={6}
          sx={{
            display: "flex",
            justifyContent: {
              lg: "right",
              sm: "center",
              xs: "center",
              alignItems: "center",
            },
          }}
          data-aos="fade-right"
        >
          <Image src={about} width={400} alt="logo" />
        </Grid>
        <Grid item lg={6} sx={{ py: 5, px: 5 }} data-aos="fade-left">
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              textAlign: "left",
              borderLeft: "2px solid #00DACD",
              paddingLeft: "20px",
            }}
          >
            Kaanch has been created to help overcome the challenges associated
            with blockchain network’s security, scalability, decentralization,
            privacy, as well as user and developer experience.
            <br /> <br />
            Let’s take a look at each of those challenges to determine whether
            Kaanch has a chance of narrowing the gap between them all.
          </Typography>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default page;
