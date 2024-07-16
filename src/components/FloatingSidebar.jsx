import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, IconButton } from "@mui/material";

const FloatingSidebar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        right: 20,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        padding: "10px 0",
        borderRadius: "0 8px 8px 0",
      }}
       data-aos="fade-left"
    >
      <IconButton>
        <TelegramIcon
          sx={{
            color: "white",
            "&:hover": {
              color: "#00DACD",
            },
          }}
        />
      </IconButton>
      <IconButton>
        <TwitterIcon
          sx={{
            color: "white",
            "&:hover": {
              color: "#00DACD",
            },
          }}
        />
      </IconButton>
      <IconButton>
        <LinkedInIcon
          sx={{
            color: "white",
            "&:hover": {
              color: "#00DACD",
            },
          }}
        />
      </IconButton>
      <IconButton>
        <RedditIcon
          sx={{
            color: "white",
            "&:hover": {
              color: "#00DACD",
            },
          }}
        />
      </IconButton>
      <IconButton>
        <YouTubeIcon
          sx={{
            color: "white",
            "&:hover": {
              color: "#00DACD",
            },
          }}
        />
      </IconButton>
      <IconButton>
        <InstagramIcon
          sx={{
            color: "white",
            "&:hover": {
              color: "#00DACD",
            },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default FloatingSidebar;
