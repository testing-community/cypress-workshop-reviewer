const core = require('@actions/core')
const github = require('@actions/github');
const { verifyBranch } = require('./src/services/branch.service');
const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const getAllFiles = function(dirPath, arrayOfFiles) {
  const files = readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(join(__dirname, dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

try {
  const branchName = github.context.payload.pull_request.head.ref;

  const arrayOfFiles = getAllFiles("./")
  console.log(arrayOfFiles)

  verifyBranch(branchName);
} catch (error) {
  core.setFailed(error.message);
}
