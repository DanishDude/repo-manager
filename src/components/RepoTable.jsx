import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBranches, fetchContributors, fetchLanguages } from '../actions/repoDetail';
import RepoDetails from './RepoDetails';
import './RepoTable.scss';

const RepoTable = () => {
  const {/*  error, loading, */ repos } = useSelector(state => state.repoSearch);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [repo, setRepo] = useState({});

  const getRepoDetails = (repo) => {
    setRepo(repo);
    dispatch(fetchBranches(repo.branches_url.replace('{/branch}', '')));
    dispatch(fetchContributors(repo.contributors_url));
    dispatch(fetchLanguages(repo.languages_url));
  };

  return (
    <div className="RepoTable">
      {!repos.items
        ? <p>Search for any repo :-D</p>
        : <div>
            <Table striped bordered hover size="sm" responsive>

              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Owner</th>
                  <th>Username</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {repos.items.map(repo => 
                  <tr key={repo.id} className="repo">
                    <td>
                      <img className="avatar" src={repo.owner.avatar_url} alt=''/>
                    </td>
                    <td>{repo.name}</td>
                    <td>{repo.owner.login}</td>
                    <td>
                      <Button 
                        onClick={() => {
                          getRepoDetails(repo);
                          setModalShow(true);
                        }}
                      >
                        Details
                      </Button>
                    </td>
                    <td>
                      <a
                        href={repo.html_url}
                        target='_blank'
                        rel="noopener noreferrer"
                      >
                        See on github
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>

            </Table>
          </div>}
      
      <RepoDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        repoSummary={repo}
      />
    </div>
  )
}

export default RepoTable;