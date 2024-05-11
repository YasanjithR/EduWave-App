import React from 'react';
import { LinearProgress } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CourseProgressTracker = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-xl shadow-md mt-3 ">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Overall Progress</h2>
        <div className="flex justify-between">
          <div className="w-1/2 pr-4 border-r border-gray-300">
            <h3 className="text-lg font-semibold mb-2">Linear Progress</h3>
            <div className="flex items-center mb-4">
              <div className="w-full">
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{ height: '20px', borderRadius: '10px', '& .MuiLinearProgress-bar': { borderRadius: '10px' } }}
                />
              </div>
              <span className="ml-2 text-gray-600 text-lg">75%</span>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="text-lg font-semibold mb-2">Circular Progress</h3>
            <div className="flex items-center justify-center mb-4">
              <div style={{ width: '150px', height: '150px' }}>
                <CircularProgressbar
                  value={75}
                  text={`${75}%`}
                  strokeWidth={10}
                  styles={{
                    root: { width: '100%' },
                    path: { stroke: '#007BFF' },
                    text: { fontSize: '24px', fill: '#007BFF' },
                    trail: { stroke: '#f3f3f3' },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgressTracker;
