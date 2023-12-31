import { Avatar, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import imageSrc from "../../assets/images/img1.png";
import { useDispatch } from "react-redux";
import { regUser } from "../../redux/userSlice";

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgPrev, setImgPrev] = useState("");
  const [image, setImage] = useState("");

  const changeFileHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgPrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", image);

    dispatch(regUser(myForm));
  };

  return (
    <Box className="container">
      <Typography display="flex" justifyContent="center" variant="h4">
        Register Your Account
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <Avatar src={imgPrev} sx={{ width: 70, height: 70 }} />
      </Box>
      <form onSubmit={submitHandler}>
        <Box>
          <Box display="flex" justifyContent="center" py={2}>
            <Typography variant="span" lineHeight={2.5} pr={4.6}>Name: </Typography>
            <input
              className="inputarea"
              type="text"
              placeholder="Enter Your Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box display="flex" justifyContent="center" py={2}>
            <Typography variant="span" lineHeight={2.5} pr={4.6}>Email: </Typography>
            <input
              className="inputarea"
              type="email"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box display="flex" justifyContent="center" py={2}>
            <Typography variant="span" lineHeight={2.5} pr={3}>Password: </Typography>
            <input
              className="inputarea"
              type="password"
              placeholder="Enter Your Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box display="flex" justifyContent="center" py={2}>
            <Typography>Choose Image: </Typography>
            <input
              accept="image/*"
              type="file"
              placeholder="Choose Image"
              id="profileImg"
              onChange={changeFileHandler}
            />
          </Box>

          <Box display="flex" justifyContent="center" gap={2}>
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
              Sign Up
            </Button>
            <Link to="/login">
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  borderColor: "#FD8D14",
                  color: "black",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#F6F4EB",
                    borderColor: "#FD8D14",
                    boxShadow: "none",
                    color: "#FD8D14",
                  },
                  "&:focus": {
                    boxShadow: "#F6F4EB",
                  },
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
