// useRegisterCmsUser.js
import useHttp from './useHttp';

const useRegisterCmsUser = (body) => {
  return useHttp('cms/user/register', 'POST', body);
};

export default useRegisterCmsUser;