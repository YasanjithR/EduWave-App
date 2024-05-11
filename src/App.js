import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import HomeStudent from './pages/Home-Student';
import ApproveCourseTablePage from './pages/ApproveCourseTablePage';
import EnrolledCoursesPage from './pages/EnrolledCourses';
import CourseDetailsPage from './pages/CourseDetailsPage';
import PaymentPage from './pages/PaymentPage';
import CourseProgressTrackerPage from './pages/ProgressPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>

          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home-student" element={<HomeStudent />} />
            <Route path="/home-admin" element={<ApproveCourseTablePage />} />
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
