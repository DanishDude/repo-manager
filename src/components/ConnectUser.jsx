import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { connectUser } from '../actions/user';

const ConnectUser = () => {
  const dispatch = useDispatch();
  return (
    <Button className="ConnectUser" onClick={() => dispatch(connectUser())}>Connect</Button>
  );
};

export default ConnectUser;
