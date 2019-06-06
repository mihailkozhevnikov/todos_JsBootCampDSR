
  
  export const loginAction = (userName, userRole) => {
      debugger
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