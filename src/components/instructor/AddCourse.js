import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSubmitCourse from '../../hooks/useCourse/useSubmitCourse';
import { uploadToS3 } from '../../services/uploadToS3';
import { TextField, Button, Box, CircularProgress, LinearProgress, Grid, Typography, Card, CardContent, Snackbar, Dialog, DialogTitle, DialogActions } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddCourse = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [price, setPrice] = useState('');
  const { submitCourse, loading, error } = useSubmitCourse();

  const handleFileChange = async (e) => {
    setUploading(true);
    const fileUrl = await uploadToS3(e.target.files[0]);
    setThumbnail(fileUrl);
    setUploading(false);
    setUploadSuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!thumbnail) {
      alert('File upload failed. Please try again.');
      return;
    }

    const email = localStorage.getItem('email');
    const course = { title, content, email, thumbnail, price };

    const result = await submitCourse(course);
    if (result) {
      setSubmitSuccess(true);
      setTitle('');
      setContent('');
      setThumbnail('');
      navigate('/home-instructor/courses');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <Card sx={{ width: '80%', borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Add New Course
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Price (in USD)"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<CloudUploadIcon />}
                >
                  {uploadSuccess ? 'Uploaded' : 'Upload Thumbnail'}
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>
                {uploading && <CircularProgress size={24} />}
              </Grid>
              <Grid item xs={12}>
                {loading && <LinearProgress />}
                <Button type="submit" disabled={loading || uploading} variant="contained" color="primary" fullWidth>
                  {loading || uploading ? <CircularProgress size={24} /> : 'Submit'}
                </Button>
                {error && <Typography variant="body2" color="error">{error}</Typography>}
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Snackbar open={uploadSuccess} autoHideDuration={6000} onClose={() => setUploadSuccess(false)} message="Thumbnail uploaded successfully" />
      <Dialog open={submitSuccess} onClose={() => setSubmitSuccess(false)}>
        <DialogTitle>New course added successfully</DialogTitle>
        <DialogActions>
          <Button onClick={() => setSubmitSuccess(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddCourse;