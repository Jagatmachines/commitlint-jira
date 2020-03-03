import jiraCommitMessageSeparatorRuleResolver from '../jiraCommitMessageSeparatorRuleResolver'

describe('jiraCommitMessageSeparatorRuleResolver', () => {
  it('should return a error response if commitMessageSeparator not match provided separator', () => {
    const parsed = {
      raw: 'IB-21/ my commit message',
    }
    expect(jiraCommitMessageSeparatorRuleResolver(parsed)[0]).toEqual(false)
  })
  it('should return a success response if commitMessageSeparator match provided separator', () => {
    const parsed = {
      raw: 'IB-21: my commit message',
    }
    expect(jiraCommitMessageSeparatorRuleResolver(parsed)[0]).toEqual(true)
  })
})
