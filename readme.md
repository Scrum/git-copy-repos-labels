# git-copy-repos-labels
> A iny helper to copy a list of labels from the github repository 

[![Travis Build Status](https://img.shields.io/travis/Scrum/git-copy-repos-labels/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/git-copy-repos-labels)[![Coveralls status](https://img.shields.io/coveralls/Scrum/git-copy-repos-labels.svg?style=flat-square)](https://coveralls.io/r/Scrum/git-copy-repos-labels)

## Install
```bash
npm install git-copy-repos-labels
```

## Usage
```js
import gitCopyReposLabels from 'git-copy-repos-labels';

gitCopyReposLabels({
  from: {
    owner: 'scrum', 
    repo: 'git-template-labels'
  },
  to: {
    owner: 'post', 
    repo: 'post-static'
  },
  token: '59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f'
});
//=> [{id: 1479855803, node_id: 'MDU6TGFiZWwxNDc5ODU1ODAz', url: 'https://api.github.com/repos/post/post-static/labels/bug', name: 'bug', color: 'd73a4a', description: 'Something isn\'t working', default: true}, ...]
```

## API
#### `from`
  Type: `Object` **`Required`**  
  Default: `undefined`  
  Description: *Github repository from copy labels.*

  - #### `owner`

    Type: `String` **`Required`**  
    Default: `undefined`  
    Description: *Github owner or organization name.*

  - #### `repo`

    Type: `String` **`Required`**  
    Default: `undefined`  
    Description: *Repository name.*

#### `to`
  Type: `Object` **`Required`**  
  Default: `undefined`  
  Description: *Github repository to copy labels.*

  - #### `owner`

    Type: `String` **`Required`**  
    Default: `undefined`  
    Description: *Github owner or organization name.*

  - #### `repo`

    Type: `String` **`Required`**  
    Default: `undefined`  
    Description: *Repository name.*

#### `token`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)*

#### `strategy`

Type: `String<post|put>`  
Default: `post`  
Description: *Behavior strategy for merging, deleting or updating labels*
  - `post` - *Delete all labels from the repository and create from the remote repository*
  - `put` - *Full replacement of the label when it matches*

## Related
 - [git-get-repos-labels](https://github.com/Scrum/git-get-repos-labels) - A iny helper to get a list of labels from the github repository
 - [git-del-repos-labels](https://github.com/Scrum/git-del-repos-labels) - A iny helper to del a list of labels from the github repository
 - [git-create-repos-labels](https://github.com/Scrum/git-create-repos-labels) - A tiny helper to create of label in the github repository 
 - [git-update-repos-labels](https://github.com/Scrum/git-update-repos-labels) - A tiny helper to update of label in the github repository 
