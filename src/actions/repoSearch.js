import { urlApi } from '../constant';

export const startRepoSearch = () => ({
  type: 'START_REPO_SEARCH'
});

export const successRepoSearch = repos => ({
  type: 'SUCCESS_REPO_SEARCH',
  repos
});

export const errorRepoSearch = err => ({
  type: 'ERROR_REPO_SEARCH',
  err
});

export const fetchRepoSearch = search => dispatch => {
  dispatch(startRepoSearch());

  fetch(`${urlApi}/search/repositories?q=${search}`)
    .then(res => res.json())
    .then(payload => dispatch(successRepoSearch(payload)))
    .catch(err => dispatch(errorRepoSearch(err)));
};

