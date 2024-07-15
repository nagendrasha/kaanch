import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center",backgroundColor:'black',py:{lg:'50px',sm:'20px',xs:'20px'} }}>
        <Box sx={{ textAlign: "center", py:{lg:'50px',sm:'20px',xs:'20px'} }}>
          <Typography variant="h2" sx={{ fontWeight: "bold",color:'white',fontSize:{lg:'60px',sm:'30px',xs:'30px'} }}>
            Commanding the future,
            <br /> Unyielding in Trust
          </Typography>
         <br />
          <Typography  sx={{ color:'white',fontSize:{lg:'20px',sm:'14px',xs:'14px'},textAlign:'center',p:{lg:'20px',sm:'10px',xs:'10px'} }}>
            Deploy Web3 apps that are as fast as legacy solutions. Kaanch is a
            layer 1 that enables teams to deploy scalable, secure, low-cost, and{" "}
            ZK privacy-enhanced products across multiple verticals—from DeFi and
            gaming to enterprise.
          </Typography>
        </Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item lg={6} sm={12} xs={12} sx={{ display:{lg:'block',sm:'flex',xs:'flex'},justifyContent:'center' }}>
            <Button
              variant="contained"
              sx={{
                float: { lg: "right" },
                color:'white',
                p: "15px 30px",
                borderRadius: "100px",
                mr: "10px",
                '&:hover':{
                  background:'white',
                  color:'black'
                },
                background:
                  "linear-gradient(108deg, rgba(0,218,205,1) 54%, rgba(0,0,0,1) 100%)",
              }}
            >
              Start Building
            </Button>
          </Grid>
          <Grid item lg={6} sm={12} xs={12} sx={{ mt:{lg:'0px',sm:'10px',xs:'10px'},display:{lg:'block',sm:'flex',xs:'flex'},justifyContent:'center' }}>
            <Button
              variant="outlined"
              sx={{
                float: { lg: "left" },
                color:'white',
                '&:hover':{
                  background:'white',
                  color:'black'
                },
                p: "15px 30px",
                border:'1px solid white',
                borderRadius: "100px",
              }}
            >
              Get Kaanch
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* featured section */}
      <Grid container sx={{ display:'flex',justifyContent:'center' }}>
        <Box sx={{textAlign:'center'}}>
        <Typography sx={{ mt:4 }}>FEATURED IN</Typography>

        </Box>
      </Grid>
      
    </>
  );
};

export default Homepage;
