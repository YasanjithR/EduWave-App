import { useState } from 'react';
import useAuth from "../../hooks/auth/useAuth"
import useCourses from "../../hooks/useCourse/useCourses";
import { Container, TextField } from "@mui/material";
import AppAppBarLearner from "../../components/common/AppAppBarLearner";
import CourseDetailsCard from "../../components/learner/CourseDetailsCard";

const LearnerHome = () => {
  useAuth();
  const courses = useCourses();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
          <TextField
            variant="outlined"
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              mb: 2,
              width: '100%',
              bgcolor: 'white',
              marginBottom: 5,
              borderRadius: 20,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
            }}
          />
          {courses.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase())).map((course) => (
            <CourseDetailsCard key={course._id} course={course} />
          ))}
        </Container>
      </div>
    </div>
  );
}

export default LearnerHome;