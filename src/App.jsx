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



function App() {
  return (
    <>
    <Header/>

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
  );
}

export default App;
