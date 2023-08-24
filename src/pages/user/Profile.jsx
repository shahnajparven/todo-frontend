import { Box, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Box className="container">
          <Box py={8} sx={{ width: "100%", height: "90vh" }} lineHeight={2}>
            <Typography variant="h5" py={2}>Profile</Typography>
            <Divider />
            <Box py={2}>
              <Box> Name: {user.name} </Box>
              <Box> Role: {user.role}</Box>
              <Box> Email: {user.email}</Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Profile;
