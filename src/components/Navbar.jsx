"use client";
import { AppBar, Box, Button, Toolbar, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import CallSplitIcon from '@mui/icons-material/CallSplit';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TimelineIcon from '@mui/icons-material/Timeline';
import TokenIcon from '@mui/icons-material/Token';
import SecurityIcon from '@mui/icons-material/Security';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import CheckIcon from '@mui/icons-material/Check';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchemaIcon from '@mui/icons-material/Schema';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IoLogoDiscord } from "react-icons/io5";

const navItems = [
  {
    id: 1,
    name: "Uncover",
    link: "/",
    submenu: [
      { name: "About", link: "/sub1-1", icon: <InfoIcon /> },
      { name: "Technology", link: "/sub1-2",icon:<CallSplitIcon/> },
      { name: "Center stage(Kaanch foundation)", link: "/sub1-2",icon:<CallSplitIcon/> },
      { name: "Mission", link: "/sub1-2",icon:<DeviceHubIcon/>},
      { name: "Solutions", link: "/sub1-2",icon:<LanguageIcon/> },
    ],
  },
  {
    id: 2,
    name: "Directives",
    link: "/about",
    submenu: [
      { name: "Roadmap", link: "/sub2-1",icon:<AccountBalanceWalletIcon/> },
      { name: "Performance matrics", link: "/sub2-2",icon:<TimelineIcon/> },
      { name: "Tokenomics", link: "/sub2-2",icon:<TokenIcon/> },
      { name: "Use cases", link: "/sub2-2",icon:<SecurityIcon/> },
      { name: "Consensus Mechanism", link: "/sub2-2",icon:<SsidChartIcon/> },
      { name: "Key Features", link: "/sub2-2",icon:<CheckIcon/> },
      { name: "Documents", link: "/sub2-2",icon:<TextSnippetIcon/> }
    ],
  },
  {
    id: 3,
    name: "Resources",
    link: "/contact",
    submenu: [
      { name: "Develper tools", link: "/sub3-1",icon:<ConstructionIcon/> },
      { name: "Auditings", link: "/sub3-2",icon:<SchemaIcon/> },
      { name: "Algorithm Arena", link: "/sub3-2",icon:<TroubleshootIcon/> },
      { name: "Testnet Faucet", link: "/sub3-2",icon:<InsertChartIcon/> },
    ],
  },
  {
    id: 4,
    name: "Community",
    link: "/login",
    submenu: [
      { name: "Forums - Twitter", link: "/sub4-1",icon:<TwitterIcon/> },
      { name: "Telegram", link: "/sub4-2",icon:<TelegramIcon/> },
      { name: "Discord etc", link: "/sub4-2",icon:<IoLogoDiscord/> },
    ],
  },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuId(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <React.Fragment key={item.id}>
              <Button
                sx={{ color: "#fff" }}
                onClick={(e) => handleMenuOpen(e, item.id)}
              >
                {item.name} <ExpandMoreIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={openMenuId === item.id}
                onClose={handleMenuClose}
                MenuListProps={{ onMouseLeave: handleMenuClose }}
                PaperProps={{
                  sx: {
                    backgroundColor: "#14232F",
                    marginTop: 0,
                    marginBottom: 0,
                  },
                }}
              >
                {item.submenu.map((subItem, index) => (
                  <MenuItem
                    key={index}
                    sx={{
                      backgroundColor: "#14232F",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#14232F",
                      },
                    }}
                    onClick={handleMenuClose}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <span
                        style={{
                          color: "#00DACD",
                          marginRight: "10px",
                          fontSize: "14px",
                        }}
                      >
                        {subItem.icon}
                      </span>{" "}
                      {subItem.name}
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
