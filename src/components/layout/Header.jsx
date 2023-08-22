import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, Outlet } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Header = () => {
  const isAuthenticated = true;
  const user = {
    role: "admin",
  };

  ////modal
  const [state, setState] = useState(false);
  ///modal
  const logOut = () => {
    console.log("Logout");
    setState(false)();
  };
  return (
    <>
      <Box
        className="container"
        py={5}
        backgroundColor="white"
       display="flex"
        justifyContent="left"
        alignItems="center"
        position='fixed'
        zIndex={5}
        sx={{width:'100%'}}
      >
        <Box position="fixed" display="flex" gap={2}>
          <Box
            height={40}
            width={40}
            borderRadius={100}
            backgroundColor="#FD8D14"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              onClick={() => {
                setState(true);
              }}
              size="small"
              color="inherit"
            >
              <FormatAlignCenterIcon />
            </IconButton>
          </Box>
          <Box
            height={40}
            width={40}
            borderRadius={100}
            backgroundColor="#C4C1A4"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton size="small" color="inherit">
              <Brightness2Icon />
            </IconButton>
          </Box>
        </Box>

        <Drawer
          open={state}
          onClose={() => {
            setState(false);
          }}
        >
          <Box width={{ lg: 250, md: 250, xs: 250 }} py={2}>
            <Typography variant="h5" fontSize={18} px={5} py={1}>
              COURSE BUNDER
            </Typography>
            <Divider />

            <Box className="navs" px={5}>
              <Link
                onClick={() => {
                  setState(false);
                }}
                to="/"
                className="nav-item"
              >
                <Box> Home </Box>
              </Link>
              <Link
                onClick={() => {
                  setState(false);
                }}
                to="/courses"
                className="nav-item"
              >
                <Box>Browse All Courses</Box>
              </Link>
              <Link
                onClick={() => {
                  setState(false);
                }}
                to="#"
                className="nav-item"
              >
                <Box>Request a Course</Box>
              </Link>
              <Link
                onClick={() => {
                  setState(false);
                }}
                to="/contact"
                className="nav-item"
              >
                <Box> Contact Us</Box>
              </Link>
              <Link
                onClick={() => {
                  setState(false);
                }}
                to="/about"
                className="nav-item"
              >
                <Box> About</Box>
              </Link>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap={1}
              position="absolute"
              bottom="2rem"
              width="100%"
            >
              {isAuthenticated ? (
                <>
                  <Box display="flex" justifyContent="center" gap={1}>
                    <Link
                      onClick={() => {
                        setState(false);
                      }}
                      to="/profile"
                    >
                      <Button
                        variant="contained"
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
                        Profile
                      </Button>
                    </Link>
                    <Typography lineHeight={2.2}>or</Typography>
                    <Box>
                      <Button
                        onClick={logOut}
                        variant="contained"
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
                        <LogoutIcon fontSize="12px" />
                        Logout
                      </Button>
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="center" py={0.5}>
                    {user && user.role === "admin" && (
                      <Link
                        onClick={() => {
                          setState(false);
                        }}
                        to="/admin/dashboard"
                      >
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
                        >
                          <DashboardIcon fontSize="12px" />
                          Dashboard
                        </Button>
                      </Link>
                    )}
                  </Box>
                </>
              ) : (
                <Box display="flex" justifyContent="center" gap={1}>
                  <Link
                    onClick={() => {
                      setState(false);
                    }}
                    to="/login"
                  >
                    <Button
                      variant="contained"
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
                  </Link>

                  <Typography lineHeight={2.2}>or</Typography>
                  <Link
                    onClick={() => {
                      setState(false);
                    }}
                    to="/signup"
                  >
                    <Button
                      variant="contained"
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
                  </Link>
                </Box>
              )}
            </Box>
          </Box>
        </Drawer>
        {/* <Box><Outlet/></Box> */}
      </Box>
    </>
  );
};

export default Header;
