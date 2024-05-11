import { useState, useEffect } from 'react';
import useRegisterCmsUser from './useRegisterCmsUser';
import useRegisterLearner from './useRegisterLearner';

const useUserRegistration = (body) => {
  const { data: cmsUserData, execute: executeCmsUserRegister } = useRegisterCmsUser(body);
  const { data: learnerData, execute: executeLearnerRegister } = useRegisterLearner(body);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (cmsUserData?.message === 'User registered successfully' || learnerData?.message === 'User registered successfully') {
      setOpen(true);
    }
  }, [cmsUserData, learnerData]);

  return { open, setOpen, executeCmsUserRegister, executeLearnerRegister };
};

export default useUserRegistration;