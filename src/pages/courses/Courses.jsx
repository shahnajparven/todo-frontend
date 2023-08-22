/* eslint-disable react/jsx-key */
import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import imageSrc from "../../assets/images/img1.png";
import Course from "./Course";

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "Web Development",
    "Graphics Design",
    "Artificial Intellegence",
    "App Development",
    "Data Science",
    "Game Development",
    "Web Development",
    "Graphics Design",
    "Artificial Intellegence",
    "App Development",
    "Data Science",
    "Game Development",
  ];
  const addToPlaylistHandler = () => {
    console.log("Add To Play");
  };
  return (
    <Box className="container">
      <Typography variant="h5" display="flex" justifyContent="center" py={5}>
        All Courses
      </Typography>
      <Divider />
      <Box py={4} display="flex" justifyContent="center">
        <input
          className="searchBar"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search a course..."
          type="text"
        />
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        {categories.map((item, index) => (
          <Button
            variant="contained"
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
            key={index}
            onClick={() => setCategory(item)}
            width={200}
          >
            {item}
          </Button>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" py={4}>
        <Course
          image={imageSrc}
          title={"Sample"}
          description={"Sample"}
          views={23}
          id={"Sample"}
          creator={"Sample Boy"}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Box>
    </Box>
  );
};

export default Courses;
