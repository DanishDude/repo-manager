const initialState = {
  loading: false,
  user: {},
  error: ''
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'START_LOGIN':
      return { ...state, loading: true, };
    case 'SUCCESS_LOGIN':
      return { ...state, user: action.payload, loading: false };
    case 'ERROR_LOGIN':
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  };
};

export default user;
