import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const dispatch = useDispatch();

  const submitHandler = () => {
    console.log("first");
  };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch({ type: 'clearError' });
  //   }

  //   if (stateMessage) {
  //     toast.success(stateMessage);
  //     dispatch({ type: 'clearMessage' });
  //   }
  // }, [dispatch, error, stateMessage]);
  return (
    <Box className="container">
      <Box h="full" justifyContent={"center"} spacing="16">
        <Typography variant="h5" py={2}>
          Contact Us
        </Typography>
        <Divider />
        <Box py={2}>
          <form onSubmit={submitHandler} style={{ width: "100%" }}>
            <Box my={2}>
              <Typography>Name</Typography>
              <input
                className="inputarea"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Abc"
                type="text"
              />
            </Box>

            <Box my={2}>
              <Typography>Email Address</Typography>
              <input
                className="inputarea"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type="email"
              />
            </Box>

            <Box my={2}>
              <Typography>Message</Typography>

              <textarea
                className="inputarea"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message...."
              />
            </Box>

            <Button
              my="4"
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
              type="submit"
            >
              Send Mail
            </Button>

            <Box py={4}>
              Request for a course? <Link to="/request">Click here</Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
