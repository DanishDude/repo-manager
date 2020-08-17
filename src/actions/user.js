export const startLogin = () => ({
  type: 'START_LOGIN'
});

export const errorLogin = error => ({
  type: 'ERROR_LOGIN',
  error
});

export const successLogin = payload => ({
  type: 'SUCCESS_LOGIN',
  payload
});

export const connectUser = () => dispatch => {
  dispatch(startLogin());

  const options = {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      // 'Accept': '*/*',
      // 'Content-Type': 'application/json'
    }
  };

  fetch('https://github.com/login/oauth/authorize?redirect_uri=http://localhost:3000')
    .then(res => res.json())
    .then(payload => dispatch(successLogin(payload)))
    .catch(err => dispatch(errorLogin(err)));
};