import { Box, IconButton, Link, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const LogoPart = () => {
  return (
    <Box
      className="container"
      py={6.5}
      backgroundColor="#272829"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="white"
    >
      <Box display="flex" gap={2}>
        <IconButton
          size="large"
          color="inherit"
          sx={{
            background: "#FD8D14",
            color: "black",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#F6F4EB",
              borderColor: "none",
              boxShadow: "none",
              color: "#FD8D14",
            },
            "&:focus": {
              boxShadow: "#F6F4EB",
            },
          }}
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h5" lineHeight={2}>Learning Point</Typography>
      </Box>
      <Box display="flex" gap={2}>
      <Link to={"https://www.linkedin.com/in/shahnaj-parven/"}>
        <IconButton
          size="large"
          color="inherit"
          sx={{
            background: "#FD8D14",
            color: "black",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#F6F4EB",
              borderColor: "none",
              boxShadow: "none",
              color: "#FD8D14",
            },
            "&:focus": {
              boxShadow: "#F6F4EB",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
        </Link>
        <Link to="https://github.com/shahnajparven">
        <IconButton
          size="large"
          color="inherit"
          sx={{
            background: "#FD8D14",
            color: "black",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#F6F4EB",
              borderColor: "none",
              boxShadow: "none",
              color: "#FD8D14",
            },
            "&:focus": {
              boxShadow: "#F6F4EB",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
        </Link>
        <Link to="https://github.com/shahnajparven">
        <IconButton
          size="large"
          color="inherit"
          sx={{
            background: "#FD8D14",
            color: "black",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#F6F4EB",
              borderColor: "none",
              boxShadow: "none",
              color: "#FD8D14",
            },
            "&:focus": {
              boxShadow: "#F6F4EB",
            },
          }}
        >
          <EmailIcon />
        </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default LogoPart;
