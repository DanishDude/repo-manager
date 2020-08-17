import React, {  useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccessToken } from '../actions/user';

const ConnectUser = () => {
  const dispatch = useDispatch();
  const { avatar_url } = useSelector(state => state.user.user);
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      dispatch(fetchAccessToken(newUrl[1]))
    }
  }, [dispatch]);

  return (
    <div className="ConnectUser">
      <div>
        {avatar_url
          ? <img src={avatar_url} alt="" />
          : <a href={`https://github.com/login/oauth/authorize?scope=user
              &client_id=${client_id}&redirect_uri=${redirect_uri}`}
            >
              Login with Guthub
            </a>}
      </div>

    {/* <Button onClick={() => dispatch(connectUser())}>Connect</Button> */}
    </div>
  );
};

export default ConnectUser;
