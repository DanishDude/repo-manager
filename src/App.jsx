import React from 'react';
import ConnectUser from './components/ConnectUser';
import RepoTable from './components/RepoTable';
import RepoSearch from './components/RepoSearch';
import './App.css';

function App() {

  return (
    <div className="App">
      <h5>Github Repository Search</h5>
      <RepoSearch />
      <ConnectUser />
      <RepoTable />
    </div>
  );
}

export default App;
