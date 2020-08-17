import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchRepoSearch } from '../actions/repoSearch';


let RepoSearch = () => {
  const { repoSearch } = useSelector(state => state.form);
  const dispatch = useDispatch();
  
  const handleSubmit = event => {
    event.preventDefault();

    if (repoSearch.values.search.length >= 2) {
      dispatch(fetchRepoSearch(repoSearch.values.search));
    }
  };

  return (
    <div className="RepoSearch">
      <form onSubmit={handleSubmit}>
        <Field
          name="search"
          component="input"
          type="text"
          placeholder="Let's play on mars"
          // onChange={event => getRepos(event)}
        />
        <button type="submit">Get Repos</button>
      </form>
    </div>
  );
};

RepoSearch = reduxForm({ form: 'repoSearch' })(RepoSearch);

export default RepoSearch;