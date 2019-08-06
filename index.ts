import ghGot = require('gh-got');
import gitGetReposLabels from 'git-get-repos-labels';
import gitDelReposLabels from 'git-del-repos-labels';
import gitCreateReposLabels from 'git-create-repos-labels';
import gitUpdateReposLabels from 'git-update-repos-labels';
import { options, label } from './interface';

const gitCopyReposLabels = async ({from, to, token, strategy = 'post'}: options): Promise<object> => {
  const labelsFrom = await gitGetReposLabels({owner: from.owner, repo: from.repo, token});
  const labelsTo = await gitGetReposLabels({owner: to.owner, repo: to.repo, token});

  if (strategy === 'post') {
    return Promise.all(labelsTo.map((label: label): Promise<object> => gitDelReposLabels({
      label,
      owner: to.owner, 
      repo: to.repo, 
      token
    }))).then(() => labelsFrom.map(async (label: label): Promise<object> => {
      return await gitCreateReposLabels({label, owner: to.owner, repo: to.repo, token});
    }));
  }
  
  return labelsFrom.map((label: label): Promise<object> => {
    const method = labelsTo.includes(({name}) => label.name === name) ? gitUpdateReposLabels : gitCreateReposLabels;
    return method({label, owner: to.owner, repo: to.repo, token});
  });
};

export default gitCopyReposLabels;

module.exports = gitCopyReposLabels;
module.exports.default = gitCopyReposLabels;
