import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Dialog, DialogContent, IconButton } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import ReactPlayer from 'react-player';

const EnrolledCourses = ({ course }) => {
    const [open, setOpen] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => prevIndex + 1);
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
                <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: 2 }}>
                    View
                </Button>
            </CardContent>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
                <DialogContent>
                    {course.videos.length > 0 ? (
                        <>
                            <ReactPlayer url={course.videos[currentVideoIndex].url} controls={true} width='100%' height='100%' />
                            {currentVideoIndex < course.videos.length - 1 && (
                                <IconButton onClick={handleNextVideo}>
                                    <ArrowForwardIos />
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