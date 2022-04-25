const validBranches = [
  'main',
  'setup',
  'chore/setup-reviewer'
];

function verifyBranch(branchName) {
  if (validBranches.indexOf(branchName) === -1) {
    throw new Error(`Branch ${branchName} is not a valid branch`);
  }

  return true;
}

module.exports = {
  verifyBranch
};
