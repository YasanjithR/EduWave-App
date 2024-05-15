import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import useFetchInstructCourses from "../hooks/useInstructorCourses/useFetchInstructCourses";
import { Card, CardContent, CardMedia, Typography, Button, Collapse, Link, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLess from "@mui/icons-material/ExpandLess";

const CourseCard = ({ course }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800, m: 4 }}>
      <CardMedia
        component="img"
        height="200"
        image={course.thumbnail}
        alt={course.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.content}
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body1" paragraph>Videos:</Typography>
            {course.videos.map((video, index) => (
              <>
                <Typography paragraph key={`${index}-title`} variant="caption">{index + 1}. {video.title}</Typography>
              </>
            ))}
            <Typography variant="body1" paragraph>Notes:</Typography>
            {course.notes.map((note, index) => (
              <>
                <Typography paragraph key={`${index}-title`} variant="caption">{index + 1}. {note.title}</Typography>
              </>
            ))}
            <Typography variant="body1" paragraph>Quizzes:</Typography>
            {course.quizzes.map((quiz, index) => (
              <>
                <Typography paragraph key={`${index}-title`} variant="caption">{index + 1}. {quiz.question}</Typography>
              </>
            ))}
          </CardContent>
        </Collapse>
        <Button variant="contained" color="primary" onClick={handleExpandClick} endIcon={expanded ? <ExpandLess /> : <ExpandMoreIcon />}>
          {expanded ? 'Less' : 'More'}
        </Button>
        <Link component={RouterLink} to={`/home-instructor/courses/${course._id}`} underline="none">
          <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
            Add Content
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const CourseList = () => {
  const { courses, loading, error } = useFetchInstructCourses();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Grid container spacing={4} style={{ padding: '20px' }}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <CourseCard course={course} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseList;