import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box className="container">
      <Typography display="flex" justifyContent="center" variant="h4">
        Sign In Your Account
      </Typography>
      <Box>
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
        <Box display="flex" justifyContent="center">
          <Link to="/forgotpassword">
            <Button>Forget Password ?</Button>
          </Link>
        </Box>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Link to="/signup">
            <Button variant="outlined" type="submit">
              Register
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
