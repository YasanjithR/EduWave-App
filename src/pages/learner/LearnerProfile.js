import { Box, Container, Avatar, Typography } from "@mui/material";
import AppAppBarLearner from "../../components/common/AppAppBarLearner";
import useLearner from "../../hooks/useProfile/useLearner";

const LearnerProfile = () => {
    const learner = useLearner();

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
                    {learner && (
                        <Box sx={{ bgcolor: 'white', borderRadius: '8px', p: 3, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                            <Avatar alt={learner.username} src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
                            <Typography variant="h3" component="div" gutterBottom>
                                {learner.username}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Email: {learner.email}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Mobile: {learner.mobile}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Date of Birth: 01/01/1990
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Address: 123 Main St, Anytown, USA
                            </Typography>
                        </Box>
                    )}
                </Container>
            </div>
        </div>
    );
}

export default LearnerProfile;