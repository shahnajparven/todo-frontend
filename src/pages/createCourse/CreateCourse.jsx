import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../redux/courseSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import pen from "../../assets/images/pen1.png";

const CreateCourse = () => {
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
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.course);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("createdBy", createdBy);

    dispatch(createCourse(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <Box className="container">
      <Typography variant="h4" py={2}>
        Request For a Course
      </Typography>
      <Divider />
      {/* <Box
        display={"flex"}
        flexDirection={{ lg: "row", sm: "column", xs: "column" }}
        gap={2}
      > */}
        <Box py={3} width={"100%"}>
          <form onSubmit={submitHandler}>
            <Box display="flex" justifyContent="left" flexDirection="column">
              <Box py={2}>
                <Typography variant="span" pr={13.3}>
                  Title:{" "}
                </Typography>
                <input
                  className="inputarea"
                  type="text"
                  placeholder="Enter Title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
              <Box py={2}>
                <Typography variant="span" pr={7}>
                  Description:{" "}
                </Typography>
                <input
                  className="inputarea"
                  type="text"
                  placeholder="Enter Description"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box>
              <Box py={2}>
                <Typography variant="span" pr={3.8}>
                  Creator Name:{" "}
                </Typography>

                <input
                  className="inputarea"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                  placeholder="Creator Name"
                  type="text"
                />
              </Box>
              <Box py={2}>
                <Typography variant="span" pr={9}>
                  Category:{" "}
                </Typography>
                <select
                  className="inputarea"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Category</option>

                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Box>
              <Box display="flex" justifyContent="left" gap={2} py={2} pl={18}>
                <Button
                  variant="contained"
                  type="submit"
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
                  Create Course
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
        {/* <Box width={"50%"} py={2}>
          <img src={pen} height={300} width={300} />
        </Box>
      </Box> */}
    </Box>
  );
};

export default CreateCourse;
