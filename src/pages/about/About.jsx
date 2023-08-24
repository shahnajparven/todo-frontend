import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import profilePic from "../../assets/images/img1.png";

const About = () => {
  const Founder = () => (
    <Box direction={["column", "row"]} spacing={["4", "16"]} padding={"8"}>
      <Box>
        <Avatar src={profilePic} sx={{ width: 70, height: 70 }} />
        <Typography variant="h5" fontSize={18} py={2}>
          Co-Founder
        </Typography>
      </Box>

      <Box justifyContent={"center"} alignItems={["center", "flex-start"]}>
        <Typography variant="h5" fontSize={20} py={2}>
          {" "}
          Shahnaj Parven
        </Typography>
        <Typography variant="span">
          Hi, I am a full-stack developer and a teacher. Our mission is to
          provide quality content at reasonable price.
        </Typography>
      </Box>
    </Box>
  );

  const VideoPlayer = () => (
    <Box>
      <video
        autoPlay
        loop
        muted
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        // src={introVideo}
      ></video>
    </Box>
  );

  return (
    <Box className="container">
      <Container maxW={"container.lg"} padding="16" boxShadow={"lg"}>
        <Typography variant="h5" py={2}>
          {" "}
          About Us
        </Typography>
        <Divider />
        <Box py={2}>
          <Founder />
        </Box>
        <Box m="8" direction={["column", "row"]} alignItems="center">
          <Typography
            fontFamily={"cursive"}
            m="8"
            textAlign={["center", "left"]}
          >
            We are a video streaming platform with some premium courses
            available only for premium users.
          </Typography>
          <Box py={2}>
            <Link to="/subscribe">
              <Button
                variant="contained"
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
                Checkout Our Plan
              </Button>
            </Link>
          </Box>
        </Box>

        <VideoPlayer />
      </Container>
    </Box>
  );
};

export default About;
