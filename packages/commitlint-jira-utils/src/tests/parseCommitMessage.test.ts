import parseCommitMessage from '../parseCommitMessage'

describe('commitlintPluginJiraTests', () => {
  const testCommitMessages = {
    singleScope: 'IB-2121: test commit message',
    multyScope: 'IB-2121, IB-21: test commit message',
    singleScopeWipTask: '[WIP]IB-2121: test commit message',
    multyScopeWipTask: '[WIP]IB-2121, IB-21: test commit message',
    emptyTaskIds: ': my commit message',
    missingSeparator: 'IB-21 My commit message',
    // test data for this issue: https://github.com/Gherciu/commitlint-jira/issues/7
    multyCommitPartsSeparator:
      'IB-2121: test commit message http://gherciu.github.io',
    // test data for issue: https://github.com/Gherciu/commitlint-jira/issues/6
    multyLineCommit: `
      IB-2121: test commit message
      My commit message description
        - SUBTASK-1: I added a new feature
        * SUBTASK-2: I fixed a issue
    `,
  }

  it('should return correct commitTaskIds', () => {
    expect(
      parseCommitMessage(testCommitMessages.singleScope).commitTaskIds,
    ).toEqual(['IB-2121'])
    expect(
      parseCommitMessage(testCommitMessages.singleScopeWipTask).commitTaskIds,
    ).toEqual(['IB-2121'])
    expect(
      parseCommitMessage(testCommitMessages.multyScope).commitTaskIds,
    ).toEqual(['IB-2121', 'IB-21'])
    expect(
      parseCommitMessage(testCommitMessages.multyScopeWipTask).commitTaskIds,
    ).toEqual(['IB-2121', 'IB-21'])
  })

  it('should return correct commitFooter', () => {
    expect(
      parseCommitMessage(testCommitMessages.singleScope).commitFooter,
    ).toEqual('test commit message')
  })

  it('should return correct commitStatus', () => {
    expect(
      parseCommitMessage(testCommitMessages.singleScopeWipTask).commitStatus,
    ).toEqual('WIP')
    expect(
      parseCommitMessage(testCommitMessages.multyScopeWipTask).commitStatus,
    ).toEqual('WIP')
  })

  it('should return empty array of taskIds', () => {
    expect(
      parseCommitMessage(testCommitMessages.emptyTaskIds).commitTaskIds,
    ).toEqual([])
    expect(
      parseCommitMessage(testCommitMessages.missingSeparator).commitTaskIds,
    ).toEqual([])
  })

  it('should return corect taskIds and commit footer if a url is added in commit message or multiple commit status separators', () => {
    expect(
      parseCommitMessage(testCommitMessages.multyCommitPartsSeparator)
        .commitTaskIds,
    ).toEqual(['IB-2121'])
    expect(
      parseCommitMessage(testCommitMessages.multyCommitPartsSeparator)
        .commitFooter,
    ).toEqual('test commit message http://gherciu.github.io')
  })

  it('should return corect taskIds and commit footer if is provided a multiline commit message used for description', () => {
    expect(
      parseCommitMessage(testCommitMessages.multyLineCommit).commitTaskIds,
    ).toEqual(['IB-2121'])
    expect(
      parseCommitMessage(testCommitMessages.multyLineCommit).commitFooter,
    ).toEqual('test commit message')
  })
})
