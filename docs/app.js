const GIT_API_URL = 'https://api.github.com';
const GIT_AUTHOR = 'georgelviv';
const GIT_REPO = 'algorithm';

const getRepoApi = (owner, repo) => {
  return `${ GIT_API_URL }/repos/${ owner }/${ repo }`;
};

fetch(getRepoApi(GIT_AUTHOR, GIT_REPO)).then((res) => res.json()).then(console.log)