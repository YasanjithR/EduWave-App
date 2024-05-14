import React, { useState, useEffect } from 'react';
import useFetchCourses from '../../hooks/useAdminCourses/useFetchCourses';
import useApproveCourse from '../../hooks/useAdminCourses/useApproveCourse';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Collapse, IconButton, Chip, Dialog, DialogTitle, Container, DialogActions, Button } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';

const ApproveCourseTable = () => {
  const { data: fetchedCourses, loading, error } = useFetchCourses();
  const [courses, setCourses] = useState(fetchedCourses);
  const { approveCourse } = useApproveCourse();
  const [openId, setOpenId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setCourses(fetchedCourses);
  }, [fetchedCourses]);

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleApprove = async (id) => {
    const data = await approveCourse(id);
    if (data) {
      setDialogOpen(true);
      setCourses(courses.map(course => course._id === id ? { ...course, approved: true } : course));
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <React.Fragment key={course._id}>
                <TableRow>
                  <TableCell>
                    <IconButton size="small" onClick={() => handleClick(course._id)}>
                      {openId === course._id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                    {/* Use the thumbnail from the course data */}
                    <img src={course.thumbnail} alt="Thumbnail" width="50" height="50" />
                  </TableCell>
                  <TableCell>{course.title}</TableCell>
                  <TableCell>{course.content}</TableCell>
                  <TableCell>{course.instructor.username}</TableCell>
                  <TableCell>
                    <Chip
                      label={course.approved ? 'Approved' : 'Not Approved'}
                      color={course.approved ? 'success' : 'error'}
                      clickable={!course.approved}
                      onClick={!course.approved ? () => handleApprove(course._id) : null}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openId === course._id} timeout="auto" unmountOnExit>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Videos</TableCell>
                            <TableCell>Notes</TableCell>
                            <TableCell>Quizzes</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>{course.videos.map(video => video.title).join(', ')}</TableCell>
                            <TableCell>{course.notes.map(note => note.title).join(', ')}</TableCell>
                            <TableCell>{course.quizzes.map(quiz => quiz.question).join(', ')}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Course approved successfully</DialogTitle>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Okay</Button>
          </DialogActions>
        </Dialog>
      </TableContainer>
    </Container>
  );
};

export default ApproveCourseTable;