import fuseCommitStatusEmptyRuleResolver from '../fuseCommitStatusEmptyRuleResolver'

describe('fuseCommitStatusEmptyRuleResolver', () => {
  it('should return a error response if commit status is empty', () => {
    const parsed = {
      raw: ': my commit message',
    }
    expect(fuseCommitStatusEmptyRuleResolver(parsed)[0]).toEqual(false)
  })
  it('should return a success response if commit status is not empty', () => {
    const parsed = {
      raw: '[HELLO] IB-21: my commit message',
    }
    expect(fuseCommitStatusEmptyRuleResolver(parsed)[0]).toEqual(true)
  })
})
