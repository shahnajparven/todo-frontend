import { Box } from "@mui/material";
import video1 from "../assets/videos/video1.mp4";

const Videos = () => {
  return (
    <Box
    py={10}
      className="container"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box className="videoPlay">
        <video
         // autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={video1}
        ></video>
      </Box>
    </Box>
  );
};

export default Videos;
