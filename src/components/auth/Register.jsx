import { Avatar, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import imageSrc from "../../assets/images/img1.png";

const Register = () => {
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




  return (
    <Box className="container">
      <Typography display="flex" justifyContent="center" variant="h4">
        Register Your Account
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <Avatar src={imgPrev}  sx={{ width: 70, height: 70 }}/>
      </Box>
      <form>
        <Box>
          <Box display="flex" justifyContent="center" py={2}>
            <Typography>Name: </Typography>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box display="flex" justifyContent="center" py={2}>
            <Typography>Email: </Typography>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box display="flex" justifyContent="center" py={2}>
            <Typography>Password: </Typography>
            <input
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
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
            <Link to="/login">
              <Button variant="outlined" type="submit">
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
