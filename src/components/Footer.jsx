import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import DiscordIcon from "@mui/icons-material/Discord";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IoLogoDiscord } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <Grid container sx={{ backgroundColor: "black", p: "50px" }}>
        <Grid item lg={4}>
          <Typography
            variant="h5"
            sx={{ borderLeft: "2px solid #00DACD", color: "white" }}
          >
            Be future-ready
          </Typography>
          <span style={{ color: "white", fontSize: "12px" }}>
            Get the latest from theKaanch ecosystem and engineering updates,{" "}
            <br /> straight to your inbox.
          </span>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              mt: 2,
              maxWidth:{lg:400,sm:320,xs:320},
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Your email"
              sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root": {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  backgroundColor: "#000", // Set background color to black
                  color: "#fff", // Set text color to white
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff", // Set border color to white
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineIcon style={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              sx={{
                borderTopLeftRadius: 0,
                padding: "16px",
                borderBottomLeftRadius: 0,
                backgroundColor: "#00ffff", // Set button background color to cyan
                color: "#000", // Set button text color to black
                "&:hover": {
                  backgroundColor: "#00ffff", // Keep the hover color same as background
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
          <br />
          <span style={{ color: "white", fontSize: "12px" }}>
            I consent to receive commercial information in the form of a
            newsletter sent to the e-mail address provided by the Kaanch
            Foundation with registered seat in Bergliweg 15, 6300 Zug. Providing
            consent is voluntary. Consent may be revoked at any time.
          </span>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap:{lg:2,sm:1,xs:1},
              backgroundColor: "#000",
              padding:{lg:2,sm:1,xs:1},
            }}
          >
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#00DACD",
                },
              }}
            >
              <IoLogoDiscord />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#00DACD",
                },
              }}
            >
              <TelegramIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#00DACD",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#00DACD",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#00DACD",
                },
              }}
            >
              <RedditIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#00DACD",
                },
              }}
            >
              <YouTubeIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#00DACD",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
          <span style={{ fontSize: "12px", color: "white" }}>
            Kaanch Foundation © 2022-2024.
          </span>
        </Grid>
        <Grid item lg={2}>
          <Box
            sx={{ backgroundColor: "#000", color: "#fff", p: 2, width: 250 }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Explore
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#ccc", mb: 1, display: "block" }}
            >
              ABOUT
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                "Why Kaanch",
                "Roadmap",
                "Utility & Economics",
                "Use cases",
                "FAQ",
                "Whitepapers",
                "Carbon Footprint",
              ].map((text, index) => (
                <ListItem button key={index} sx={{ p: 0.5 }}>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box
            sx={{ backgroundColor: "#000", color: "#fff", p: 2, width: 250 }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Build
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#ccc", mb: 1, display: "block" }}
            >
              DEV SPACE
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                "Dev Portal",
                "Code Repository",
                "Documentation",
                "Testnet",
                "CTRL+Hack+ZK",
              ].map((text, index) => (
                <ListItem button key={index} sx={{ p: 0.5 }}>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box
            sx={{ backgroundColor: "#000", color: "#fff", p: 2, width: 250 }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Engage
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#ccc", mb: 1, display: "block" }}
            >
              GET INVOLVED
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                "Community",
                "Events",
                "Ambassador Program",
                "Press/Brandbook",
                "The Button Game",
                "Bug Bounty Program",
              ].map((text, index) => (
                <ListItem button key={index} sx={{ p: 0.5 }}>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box
            sx={{ backgroundColor: "#000", color: "#fff", p: 2, width: 250 }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Content
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#ccc", mb: 1, display: "block" }}
            >
              Learn More
            </Typography>
            <List sx={{ p: 0 }}>
              {["Blog", "Podcast", "Videos"].map((text, index) => (
                <ListItem button key={index} sx={{ p: 0.5 }}>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{ backgroundColor: "#000", color: "#fff", p: 2, width: 250 }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#ccc", mb: 1, display: "block" }}
            >
              TEAM
            </Typography>
            <List sx={{ p: 0 }}>
              {["Careers", "Core Team"].map((text, index) => (
                <ListItem button key={index} sx={{ p: 0.5 }}>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
