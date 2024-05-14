import useAuth from "../../hooks/auth/useAuth"
import useCourses from "../../hooks/useCourse/useCourses";
import useEnrolledCourses from "../../hooks/useCourse/useEnrolledCourse";
import { Container, Grid } from "@mui/material";
import AppAppBarLearner from "../../components/common/AppAppBarLearner";
import EnrolledCourses from "../../components/learner/EnrolledCourse";

const LearnerCourses = () => {
    useAuth();
    const courses = useCourses();
    const enrolledCourses = useEnrolledCourses();

    const filteredCourses = courses.filter(course => enrolledCourses.includes(course._id));

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
                    <Grid container spacing={3}>
                        {filteredCourses.map(course => (
                            <Grid item xs={12} sm={6} md={4} key={course._id}>
                                <EnrolledCourses course={course} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default LearnerCourses;