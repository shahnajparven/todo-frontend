import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn,message } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoggedIn) {
      alert(message);
    }
  }, [dispatch, isLoggedIn,message]);

  const signIn = () => {
    console.log( email, password)
    dispatch(loginUser({ email, password }));
  };
  return (
    <Box>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Box className="container">
          <Typography display="flex" justifyContent="center" variant="h4">
            Sign In Your Account
          </Typography>
          <form>
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
                <Button onClick={signIn} variant="contained" type="submit">
                  Login
                </Button>
                <Link to="/signup">
                  <Button variant="outlined" type="submit">
                    Register
                  </Button>
                </Link>
              </Box>
            </Box>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default Login;