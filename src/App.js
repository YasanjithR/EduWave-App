import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeStudent from './pages/Home-Student';
import AdminHome from './pages/admin/AdminHome';
import InstructorHome from './pages/instructor/InstructorHome';
import EnrolledCoursesPage from './pages/EnrolledCourses';
import CourseDetailsPage from './pages/CourseDetailsPage';
import PaymentPage from './pages/PaymentPage';
import CourseProgressTrackerPage from './pages/ProgressPage';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>

          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home-student" element={<HomeStudent />} />
            <Route path="/home-admin" element={<AdminHome />} />
            <Route path="/home-instructor" element={<InstructorHome />} />
            <Route path="/enrolled" element={<EnrolledCoursesPage />} />
            <Route path="/CourseDetails" element={<CourseDetailsPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/progress" element={<CourseProgressTrackerPage />} />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
