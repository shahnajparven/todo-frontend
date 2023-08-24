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
// import { ProtectedRoute } from "protected-route-react";
import { ProtectedRoute } from "protected-route-react";

function App() {
  const { isLoading, error, message, user, isLoggedIn } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message, isLoggedIn]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <p> Loading</p>
      ) : (
        <>
          <Header isLoggedIn={isLoggedIn} user={user} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isLoggedIn}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute
                  isAuthenticated={!isLoggedIn}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            {/************User************/}
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isLoggedIn}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            {/************Admin************/}

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isLoggedIn}
                  isAdmin={user && user.role === "admin"}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
