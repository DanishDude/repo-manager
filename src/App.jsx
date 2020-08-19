import React from 'react';
import ConnectUser from './components/ConnectUser';
import RepoTable from './components/RepoTable';
import RepoSearch from './components/RepoSearch';
import UserRepos from './components/UserRepos';
import './App.css';
import './Container.scss';

function App() {
  // const { isLoggedIn } = useSelector(state => user)
  // console.log(isLoggedIn);

  return (
    <div className="App">
      <h5>Github Repository Manager</h5>
      <ConnectUser />
      <UserRepos />
      <RepoSearch />
      <RepoTable />
    </div>
  );
}

export default App;
