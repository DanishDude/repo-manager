import React, {  useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../actions/user';

const ConnectUser = () => {
  const dispatch = useDispatch();
  const { avatar_url } = useSelector(state => state.user.user);
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  useEffect(() => {
    const uri = window.location.href;
    const hasCode = uri.includes("?code=");

    if (hasCode) {
      const newUri = uri.split("?code=");
      window.history.pushState({}, null, newUri[0]);
      dispatch(userLogin(newUri[1]))
    }
  }, [dispatch]);

  return (
    <div className="ConnectUser">
      <div>
        {avatar_url
          ? <div>
              <img src={avatar_url} alt="" />
              You are connected
            </div>
          : <a href={`https://github.com/login/oauth/authorize?scope=user
              &client_id=${client_id}&redirect_uri=${redirect_uri}`}
            >
              Login with Github
            </a>}
      </div>

    {/* <Button onClick={() => dispatch(connectUser())}>Connect</Button> */}
    </div>
  );
};

export default ConnectUser;
