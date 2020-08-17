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

export const fetchAccessToken = code => dispatch => {
  dispatch(startLogin());

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const proxy_uri = process.env.REACT_APP_PROXY_URI;
  const target_uri = 'https://github.com/login/oauth/access_token'

  const requestData = { client_id, redirect_uri, client_secret, code };

  const data = new FormData();
  data.append("client_id", client_id);
  data.append("client_secret", client_secret);
  data.append("code", code);
  data.append("redirect_uri", redirect_uri);

  const options = {
    method: 'POST',
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: data // JSON.stringify(requestData)
  };

  console.log(proxy_uri, client_id, redirect_uri, client_secret, code);

  fetch(proxy_uri + target_uri, options)
    .then(res => res.text())
    .then(paramsString => {
      console.log(paramsString);
      let params = new URLSearchParams(paramsString);
      const access_token = params.get("access_token");
      const scope = params.get("scope");
      const token_type = params.get("token_type");

      return fetch(
        `https://api.github.com/user?scope=${scope}&token_type=${token_type}`,
        {headers: { 'Authorization': 'token ' + access_token }}
      );
    })
    .then(res => res.json())
    .then(payload => {
      console.log('PAYLOAD: ', payload);
      dispatch(successLogin(payload));
    })
    .catch(err => {
      dispatch(errorLogin({...err, msg: 'Ah Dang!'}))
    });
};