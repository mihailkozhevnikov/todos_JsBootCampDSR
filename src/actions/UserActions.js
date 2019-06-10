
  
  export const loginAction = (userName, userRole) => {
    return {
      type: 'LOG_IN',
      userName: userName,
      userRole: userRole
    };
  };
  
  export const logoutAction = () => {
    return {
      type: 'LOG_OUT'
    };
  };