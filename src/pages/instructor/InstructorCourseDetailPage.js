import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, CircularProgress } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import useFetchCourseDetail from '../../hooks/useInstructorCourses/useFetchCourseDetail';
import useUpdateCourse from '../../hooks/useInstructorCourses/useUpdateCourse';
import useAuth from '../../hooks/auth/useAuth';
import { uploadToS3 } from '../../services/uploadToS3';
import AppAppBarInstruct from '../../components/common/AppAppBarInstruct';

const InstructorCourseDetailPage = () => {
    useAuth();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const instructorId = localStorage.getItem('instructorId');
    const { data: course, loading: fetchLoading, error: fetchError } = useFetchCourseDetail(id);
    const { updateCourse, loading: updateLoading, error: updateError } = useUpdateCourse();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const [videoTitle, setVideoTitle] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [open, setOpen] = useState(false);

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
        setSnackbarMessage('Video uploaded successfully');
        setOpenSnackbar(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        let videoUrl = '';
        if (videoFile) {
            videoUrl = await uploadToS3(videoFile);
        }

        const newVideo = { title: videoTitle, url: videoUrl };
        const newNote = { title: noteTitle, content: noteContent };

        const courseData = {
            ...course,
            instructor: instructorId,
            videos: [...course.videos, newVideo],
            notes: [...course.notes, newNote],
        };

        await updateCourse(id, courseData);
        setOpen(true);

        setLoading(false);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/home-instructor/courses');
    };

    if (fetchLoading || updateLoading) return <div>Loading...</div>;
    if (fetchError || updateError) return <div>Error: {(fetchError || updateError).message}</div>;

    return (
        <div className="flex">
            <AppAppBarInstruct />
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
                    <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', width: '100%' }}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <TextField
                                    label="Video Title"
                                    value={videoTitle}
                                    onChange={(e) => setVideoTitle(e.target.value)}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item container justify="center">
                                <Button
                                    variant="contained"
                                    component="label"
                                    color="primary"
                                    startIcon={<VideoCameraFrontIcon />}
                                    width="50%"
                                >
                                    Upload Video
                                    <input type="file" hidden onChange={handleFileChange} required />
                                </Button>
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Note Title"
                                    value={noteTitle}
                                    onChange={(e) => setNoteTitle(e.target.value)}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Note Content"
                                    value={noteContent}
                                    onChange={(e) => setNoteContent(e.target.value)}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item container justify="center">
                                <Button variant="contained" color="primary" type="submit" width="50%" disabled={loading}>
                                    {loading ? <CircularProgress size={24} /> : 'Submit All'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Course Updated"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Course updated successfully.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        onClose={() => setOpenSnackbar(false)}
                    >
                        <MuiAlert onClose={() => setOpenSnackbar(false)} severity="success" elevation={6} variant="filled">
                            {snackbarMessage}
                        </MuiAlert>
                    </Snackbar>
                </Container>
            </div>
        </div>
    );
};

export default InstructorCourseDetailPage;