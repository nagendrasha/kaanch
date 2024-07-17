"use client";
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import LanguageIcon from "@mui/icons-material/Language";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TimelineIcon from "@mui/icons-material/Timeline";
import TokenIcon from "@mui/icons-material/Token";
import SecurityIcon from "@mui/icons-material/Security";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import CheckIcon from "@mui/icons-material/Check";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ConstructionIcon from "@mui/icons-material/Construction";
import SchemaIcon from "@mui/icons-material/Schema";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { IoLogoDiscord } from "react-icons/io5";
import logo from "../assets/logo.png";
import Image from "next/image";
import DropdownButton from "./DropdownButton";

const navItems = [
  {
    id: 1,
    name: "Uncover",
    link: "/",
    submenu: [
      { name: "About", link: "/sub1-1", icon: <InfoIcon /> },
      { name: "Technology", link: "/sub1-2", icon: <CallSplitIcon /> },
      {
        name: "Center stage(Kaanch foundation)",
        link: "/sub1-2",
        icon: <CallSplitIcon />,
      },
      { name: "Mission", link: "/sub1-2", icon: <DeviceHubIcon /> },
      { name: "Solutions", link: "/sub1-2", icon: <LanguageIcon /> },
    ],
  },
  {
    id: 2,
    name: "Directives",
    link: "/about",
    submenu: [
      { name: "Roadmap", link: "/sub2-1", icon: <AccountBalanceWalletIcon /> },
      { name: "Performance matrics", link: "/sub2-2", icon: <TimelineIcon /> },
      { name: "Tokenomics", link: "/sub2-2", icon: <TokenIcon /> },
      { name: "Use cases", link: "/sub2-2", icon: <SecurityIcon /> },
      { name: "Consensus Mechanism", link: "/sub2-2", icon: <SsidChartIcon /> },
      { name: "Key Features", link: "/sub2-2", icon: <CheckIcon /> },
      { name: "Documents", link: "/sub2-2", icon: <TextSnippetIcon /> },
    ],
  },
  {
    id: 3,
    name: "Resources",
    link: "/contact",
    submenu: [
      { name: "Developer tools", link: "/sub3-1", icon: <ConstructionIcon /> },
      { name: "Auditings", link: "/sub3-2", icon: <SchemaIcon /> },
      { name: "Algorithm Arena", link: "/sub3-2", icon: <TroubleshootIcon /> },
      { name: "Testnet Faucet", link: "/sub3-2", icon: <InsertChartIcon /> },
    ],
  },
  {
    id: 4,
    name: "Community",
    link: "/login",
    submenu: [
      { name: "Forums - Twitter", link: "/sub4-1", icon: <TwitterIcon /> },
      { name: "Telegram", link: "/sub4-2", icon: <TelegramIcon /> },
      { name: "Discord etc", link: "/sub4-2", icon: <IoLogoDiscord /> },
    ],
  },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState({});

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuId(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmenuToggle = (id) => {
    setOpenSubmenu((prevOpenSubmenu) => ({
      ...prevOpenSubmenu,
      [id]: !prevOpenSubmenu[id],
    }));
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem button onClick={() => handleSubmenuToggle(item.id)}>
              <ListItemText primary={item.name} />
              {openSubmenu[item.id] ? <ExpandMoreIcon /> : null}
            </ListItem>
            <Collapse in={openSubmenu[item.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.submenu.map((subItem, index) => (
                  <ListItem button key={index} sx={{ pl: 4 }}>
                    <ListItemIcon>{subItem.icon}</ListItemIcon>
                    <ListItemText primary={subItem.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          px: { lg: "50px", sm: "0px", xs: "0px" },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ height: 40 }}>
            <Image src={logo} alt="Kaanch" width={200} height={40} />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <React.Fragment key={item.id}>
                <Button
                  sx={{ color: "#fff", px: 3 }}
                  onMouseEnter={(e) => handleMenuOpen(e, item.id)}
                >
                  {item.name}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={openMenuId === item.id}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleMenuClose,
                  }}
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
          <Box sx={{ display: { xs: "none", sm: "block" }, ml: 2 }}>
            <DropdownButton />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
