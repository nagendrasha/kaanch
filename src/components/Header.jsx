import { Button, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DropdownButton from "./DropdownButton";
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          py: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item lg={2} sx={{ pl: "30px" }}>
          <Image src={logo} alt="Kaanch" width={300} />
        </Grid>
        <Grid item lg={8} sx={{ display: "flex", justifyContent: "center" }}>
          <Navbar />
        </Grid>
        <Grid item lg={2} sx={{ display: "flex", alignItems: "center" }}>
            <DropdownButton/>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
