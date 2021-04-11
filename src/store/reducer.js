export const AuthReducer = (prevState, action) => {
  switch (action.type) {
    case 'RETRIEVE_USER':
      return {
        ...prevState,
        user: action.user,
        isLoading: false,
      };
    case 'LOGIN':
      return {
        ...prevState,
        user: action.user,
        isLoading: false,
      };
    case 'SIGNUP':
      return {
        ...prevState,
        user: action.user,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...prevState,
        user: null,
        isLoading: false,
      };
      default:
            return prevState;
  }
};
