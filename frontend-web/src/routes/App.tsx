import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Courses from '../pages/Courses';
import Watch from '../pages/Watch';
import Lessons from '../pages/Lessons';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import User from '../pages/User';
import CreateCourses from '../pages/CreateCourse';
import CreateLesson from '../pages/CreateLesson';
import Register from '../pages/Register';
import EditUser from '../pages/EditUser';

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="ForgotPassword" element={<ForgotPassword/>} />
        <Route path="Register" element={<Register/>} />
        <Route path="/" element={<Home />} />
        <Route path="Watch" element={<Watch/>} />
        <Route path="User" element={<User />} />
        <Route path="EditUser" element={<EditUser />} />
        <Route path="CreateCourse" element={<CreateCourses/>} />
        <Route path="CreateLesson" element={<CreateLesson/>} />
        <Route path="Courses" element={<Courses/>} />
        <Route path="Lessons" element={<Lessons/>} />
      </Routes>
    </Router>
  );
}
