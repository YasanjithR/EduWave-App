import React from 'react';
import useAuth from '../../hooks/auth/useAuth';
import AppAppBarInstruct from '../../components/common/AppAppBarInstruct';
import AddCourse from '../../components/instructor/AddCourse';

import { Container } from '@mui/material';

const InstructorHome = () => {
    useAuth()
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
                    <AddCourse />
                </Container>
            </div>
        </div>
    );
};

export default InstructorHome;