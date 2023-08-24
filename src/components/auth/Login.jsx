import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(loginUser({ email, password }));
  };
  return (
    <Box>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Box className="container">
          <Typography
            display="flex"
            justifyContent="center"
            variant="h4"
            py={2}
          >
            Sign In Your Account
          </Typography>
          <Divider />
          <form onSubmit={submitHandler}>
            <Box py={2}>
              <Box display="flex" justifyContent="center" py={2}>
                <Typography variant="span" lineHeight={2.5} pr={4.6}>
                  Email:{" "}
                </Typography>
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
                <Typography variant="span" lineHeight={2.5} pr={2}>
                  Password:{" "}
                </Typography>
                <input
                  className="inputarea"
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box display="flex" justifyContent="center">
                <Link to="/forgotpassword">
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#FD8D14",
                    }}
                  >
                    {" "}
                    Forget Password ?
                  </Button>
                </Link>
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
                  Login
                </Button>
                <Link to="/signup">
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
