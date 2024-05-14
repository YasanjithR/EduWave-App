import useAuth from "../../hooks/auth/useAuth"
import useCourses from "../../hooks/useCourse/useCourses";
import { Container } from "@mui/material";
import AppAppBarLearner from "../../components/common/AppAppBarLearner";
import CourseDetailsCard from "../../components/learner/CourseDetailsCard";

const LearnerHome = () => {
  useAuth();
  const courses = useCourses(); 

  return (
    <div className="flex">
      <AppAppBarLearner />
      <div className="flex-1 mx-3">
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          {courses.map((course) => (
            <CourseDetailsCard key={course._id} course={course} />
          ))}
        </Container>
      </div>
    </div>
  );
}

export default LearnerHome;