import React, { useState } from 'react';
import useSubmitCourse from '../../hooks/useCourse/useSubmitCourse';
import { uploadToS3 } from '../../services/uploadToS3'; 
import { TextField, Button, Box, CircularProgress, LinearProgress } from '@mui/material';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { submitCourse, loading, error } = useSubmitCourse();

  const handleFileChange = async (e) => {
    setFile(e.target.files[0]);
    setUploading(true);
    const fileUrl = await uploadToS3(e.target.files[0]);
    setThumbnail(fileUrl);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!thumbnail) {
      alert('File upload failed. Please try again.');
      return;
    }
  
    const email = localStorage.getItem('email');
    const course = { title, content, email, thumbnail };
  
    await submitCourse(course);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input type="file" onChange={handleFileChange} />
      {loading && <LinearProgress />}
      <Button type="submit" disabled={loading || uploading}>
        {loading || uploading ? <CircularProgress size={24} /> : 'Submit'}
      </Button>
      {error && <p>{error}</p>}
    </Box>
  );
};

export default AddCourse;