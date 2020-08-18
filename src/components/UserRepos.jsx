import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button'
import { fetchUserRepos } from '../actions/user';

const UserRepos = () => {
  const { repos_url, userRepos } = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user) repos_url = user.user;
  // })

  const getUserRepos = () => {
    dispatch(fetchUserRepos(repos_url));
  };

  return (
    <div className="UserRepos">
      <Button type="button" onClick={getUserRepos}>Get My Repositories</Button>
      {userRepos && userRepos.length > 0
        ? 'Yes we got your repos'
        : 'Hit the button man!'}
    </div>
  );
};

export default UserRepos;
