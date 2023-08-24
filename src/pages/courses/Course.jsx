import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import imageSrc from "../../assets/images/img1.png";

const Course = ({
    views,
    title,
    image,
    id,
    description,
    creator,
    addToPlaylistHandler,
    lectureCount,
  }) => {
  return (
    <Box className="course" alignItems="center" width={300} boxShadow={4} mx={2} my={2}>
      <Box >
    <img src={image} height={250} width={'100%'} alt="img" />
    </Box>
    <Box lineHeight={2} display='flex' flexDirection='column' py={2} px={2}>
      <Typography variant="h5" fontSize={18}>
        {title}
      </Typography>
      <Typography variant="span">{description}</Typography>

      <Typography variant="span" >
        <Typography variant="span" fontWeight="bold">Creator: </Typography>{creator}
      </Typography>
      <Typography
        variant="span"
        fontSize={12}
        textTransform="uppercase"
        fontWeight="bold"
      >{`Lectur-${lectureCount}`}</Typography>
      <Typography
        variant="span"
        fontSize={12}
        textTransform="uppercase"
        fontWeight="bold"
      >{`Views-${views}`}</Typography>

      <Box display="flex" justifyContent="left" alignItems="center" gap={1.9}>
      <Link to={`/course/${id}`}>
        <Button
          variant="contaiend"
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
          Watch Now
        </Button>
        </Link>
          <Button
            onClick={() => addToPlaylistHandler(id)}
            variant="contaiend"
            sx={{
              background: "#C4C1A4",
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
            Add To playlist
          </Button>
        
      </Box>
    </Box>
  </Box>
  )
}

export default Course