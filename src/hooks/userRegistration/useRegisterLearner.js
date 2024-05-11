import useHttp from './useHttp';

const useRegisterLearner = (body) => {
  return useHttp('learner/user/register', 'POST', body);
};

export default useRegisterLearner;