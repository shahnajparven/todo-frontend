import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Courses from "./pages/courses/Courses";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/user/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { loadUser } from "./redux/userSlice";


function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });

  const {isLoading, error,message, user, isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message,isLoggedIn]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    // <>
    // {isLoading ? (
    //   <p> Loading</p>
    //    ) : (
    <>
      {/* <ToastContainer /> */}
    <Header isLoggedIn={isLoggedIn} user={user}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/************User************/}
        <Route path="/profile" element={<Profile />} />
        {/************Admin************/}
        <Route path="/admin/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
    // )}
    // </>
  );
}

export default App;
