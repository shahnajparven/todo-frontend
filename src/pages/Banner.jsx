import { Box, Button, Typography } from "@mui/material";
import img1 from "../assets/images/img1.png";
const Banner = () => {
  return (
    <Box
      className="container"
      height="auto"
      display="flex"
      justifyContent="right"
      alignItems="center"
      gap={10}

      flexDirection={{ lg: "row", sm: "row", xs: "column" }}
    >
      <Box
        sx={{ width: "100%", height: "auto" }}
        display="flex"
        justifyContent="right"
        flexDirection="column"
        lineHeight={2.5}
      >
        <Typography variant="h4">LEARN FROM THID EXPERT</Typography>
        <Typography variant="span">Find Valuable Contet Here </Typography>
        <Box>
          <Button variant="contained" sx={{background:'#FD8D14',color:'black'}}>Explore</Button>
        </Box>
      </Box>
      <Box height={300} width={300}>
        <img className="vectorImage" src={img1} height="100%" alt="me" />
      </Box>
    </Box>
  );
};

export default Banner;
