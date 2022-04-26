const branchService = require('../../src/services/branch.service');

describe('branch.service', () => {
  test('verify an invalid branch name', () => {
    expect(() => branchService.verifyBranch('feat/this-is-a-test')).toThrowError('Branch feat/this-is-a-test is not a valid branch');
  });

  test.each([
    'setup',
    'main',
    'chore/setup-reviewer-1',
  ].map(item => [item]))("verify %p branch name", (branchName) => expect(branchService.verifyBranch(branchName)).toBe(true));
});
