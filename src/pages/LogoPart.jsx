import { Box } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import ContactlessIcon from "@mui/icons-material/Contactless";
import EmailIcon from "@mui/icons-material/Email";
import AbcIcon from "@mui/icons-material/Abc";
const LogoPart = () => {
  return (
    <Box
      className="container"
      py={8}
      backgroundColor="#272829"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="white"
    >
      <Box display="flex" gap={2}>
        <EmailIcon size="large" />
        <AbcIcon size="large" />
      </Box>
      <Box display="flex" gap={2}>
        <YouTubeIcon size="large" />
        <HomeIcon size="large" />
        <ContactlessIcon size="large" />
      </Box>
    </Box>
  );
};

export default LogoPart;
