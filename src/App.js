import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LearnerHome from './pages/learner/LearnerHome';
import LearnerCourses from './pages/learner/LearnerCourses';
import LearnerProfile from './pages/learner/LearnerProfile';
import AdminHome from './pages/admin/AdminHome';
import InstructorHome from './pages/instructor/InstructorHome';
import InstructorCourses from './pages/instructor/InstructorCourses';
import InstructorCourseDetailPage from './pages/instructor/InstructorCourseDetailPage';
import StripeCheckout from './components/payment/StripeCheckout';
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
            <Route path="/home-student" element={<LearnerHome />} />
            <Route path="/home-student/courses" element={<LearnerCourses />} />
            <Route path="/home-student/profile" element={<LearnerProfile />} />
            <Route path="/home-admin" element={<AdminHome />} />
            <Route path="/home-instructor" element={<InstructorHome />} />
            <Route path="/home-instructor/courses" element={<InstructorCourses />} />
            <Route path="/home-instructor/courses/:id" element={<InstructorCourseDetailPage />} />
            <Route path="/stripe-checkout" element={<StripeCheckout/>} />
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
