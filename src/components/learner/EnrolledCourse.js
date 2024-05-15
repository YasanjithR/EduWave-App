import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Dialog, DialogContent, IconButton } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import ReactPlayer from 'react-player';
import useCourseProgress from '../../hooks/useCourse/useCourseProgress';
import useUpdateCourseProgress from '../../hooks/useCourse/useUpdateCourseProgress';

const EnrolledCourses = ({ course }) => {
    const [open, setOpen] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const progress = useCourseProgress(course._id);
    const updateCourseProgress = useUpdateCourseProgress(course._id, course.videos.length);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            updateCourseProgress(newIndex);
            return newIndex;
        });
    };

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={course.thumbnail}
                alt={course.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course.content}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'darkslategray', mt: 2 }}>
                    Instructor: {course.instructor.username}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'darkslategray', mt: 2 }}>
                    Progress: {progress}%
                </Typography>
                <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: 2 }}>
                    View
                </Button>
            </CardContent>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
                <DialogContent sx={{ position: 'relative' }}>
                    {course.videos.length > 0 ? (
                        <>
                            <ReactPlayer url={course.videos[currentVideoIndex].url} controls={true} width='100%' height='100%' />
                            {course.notes && course.notes.length > 0 && (
                                <>
                                    <Typography variant="h6" sx={{ mt: 2 }}>
                                        {course.notes[currentVideoIndex].title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {course.notes[currentVideoIndex].content}
                                    </Typography>
                                </>
                            )}
                            {currentVideoIndex < course.videos.length - 1 && (
                                <IconButton onClick={handleNextVideo} sx={{ position: 'absolute', bottom: '1px', right: '1px', color: 'green' }}>
                                    <ArrowForwardIos />
                                    <Typography variant="button">Next</Typography>
                                </IconButton>
                            )}
                        </>
                    ) : (
                        <Typography variant="body1">
                            Lessons haven't been uploaded yet.
                        </Typography>
                    )}
                </DialogContent>
            </Dialog>
        </Card>
    );
};

export default EnrolledCourses;