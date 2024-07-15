"use client";
import React, { useState } from "react";
import { Grid, Button, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ExploreIcon from '@mui/icons-material/Explore';
import StorageIcon from '@mui/icons-material/Storage';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';

const DropdownButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid item lg={2} sx={{ display: "flex", alignItems: "center" }}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#00DACD", borderRadius: "100px" }}
        >
          Essentials
          <ExpandMoreIcon />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMouseLeave}
          PaperProps={{
            sx: { mt: 1,width:'200px',backgroundColor:'#14232F',color:'white' },
          }}
        >
          <MenuItem onClick={handleMouseLeave}><AccountBalanceWalletIcon sx={{ color:'#00DACD',mr:'5px' }}/>Wallets</MenuItem>
          <MenuItem onClick={handleMouseLeave}><StackedLineChartIcon sx={{ color:'#00DACD',mr:'5px' }}/>Extension</MenuItem>
          <MenuItem onClick={handleMouseLeave}><ExploreIcon sx={{ color:'#00DACD',mr:'5px' }}/>Explorer</MenuItem>
          <MenuItem onClick={handleMouseLeave}><StorageIcon sx={{ color:'#00DACD',mr:'5px' }}/>Stakig</MenuItem>
          <MenuItem onClick={handleMouseLeave}><AddRoadIcon sx={{ color:'#00DACD',mr:'5px' }}/>Bridge</MenuItem>
          <MenuItem onClick={handleMouseLeave}><DeviceUnknownIcon sx={{ color:'#00DACD',mr:'5px' }}/>Help-Hub</MenuItem>
          {/* Add more MenuItem components as needed */}
        </Menu>
      </div>
    </Grid>
  );
};

export default DropdownButton;
