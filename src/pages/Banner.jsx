import { Box, Button, Typography } from "@mui/material";
import img1 from "../assets/images/cartoon1.png";
import { Link } from "react-router-dom";
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
        <Typography variant="h4">LEARN FROM EXPERT</Typography>
        <Typography variant="span">Find Valuable Contet Here </Typography>
        <Link to="./courses">
          <Button
            variant="contained"
            sx={{ background: "#FD8D14", color: "black" }}
          >
            Explore
          </Button>
        </Link>
      </Box>
      <Box height={400} width={400}>
        <img className="vectorImage" src={img1} height="100%" alt="me" />
      </Box>
    </Box>
  );
};

export default Banner;
