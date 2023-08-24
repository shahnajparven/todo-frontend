/* eslint-disable react/jsx-key */
import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import imageSrc from "../../assets/images/book1.jpg";
import Course from "./Course";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourse } from "../../redux/courseSlice";

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);

  console.log(course);

 
  const categories = [
    "Web development",
    "Web Design",
    "Cyber Sicurity",
    "Object Oriented Programming",
    "Artificial Intellegence",
    "Data Structure & Algorithm",
    "App Development",
    "Graphics Design",
    "Data Science",
    "Game Development",
  ];
  const addToPlaylistHandler = () => {
    console.log("Add To Play");
  };
  useEffect(() => {
    dispatch(fetchCourse({category, keyword}));
  }, [dispatch,category, keyword,]);


  // useEffect(() => {
  //   dispatch(fetchCourseBysearch(category, keyword));

  // }, [category, keyword, dispatch]);
  return (
    <Box className="container">
      <Typography variant="h5" display="flex" justifyContent="center" fontSize={35}>
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
        {course.length > 0 ? (
          course.map(item => (
        <Course
          image={imageSrc}
          title={item.title}
          description={item.description}
          views={23}
          id={item._id}
          creator={item.creator}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        ))
        ) : (
          <Typography mt="4">Courses Not Found</Typography>
        )}
        {/* {course.map((item, id) => (
          <Course
            key={id}
            title={item.title}
            description={item.description}
            // img={item.img}
            // title={item.title}
            // subheader={item.subheader}
            // passage1={item.passage1}
            // passage2={item.passage2}
          />
        ))} */}
      </Box>
    </Box>
  );
};

export default Courses;
