import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Dialog, DialogTitle, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useEnroll from '../../hooks/useCourse/useEnroll';

const CourseDetailsCard = ({ course }) => {
  const { enroll, loading, error } = useEnroll();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleEnroll = async () => {
    const data = await enroll(course._id);
    if (data) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/home-student/courses');
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', mb: 2, width: '100%', height: 'auto' }}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image={course.thumbnail}
            alt={course.title}
          />
        </Grid>
        <Grid item xs={4}>
          <CardContent>
            <Typography component="h5" variant="h5">
              {course.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {course.content}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} container alignItems="center" justifyContent="center" flexDirection="column">
          <Typography variant="h6" sx={{ mb: 2 }}>
            {course.price > 0 ? `$${course.price} USD` : 'Free'}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleEnroll} disabled={loading || course.price > 0}>
            {course.price > 0 ? 'Buy' : 'Enroll'}
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Enrolled to course successfully</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>OK</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CourseDetailsCard;