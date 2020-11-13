import { parseCommitMessage } from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const fuseCommitStatusEmptyRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = [],
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']
  const commitMessage = parseCommitMessage(rawCommitMessage)

  const isCommitStatusEmpty = !commitMessage.commitStatus.length

  const doesCommitStatusMatchAnyValue =
    Array.isArray(value) &&
    commitMessage.commitStatus &&
    value.includes(`[${commitMessage.commitStatus}]`)
      ? true
      : false

  const isRuleValid = value
    ? doesCommitStatusMatchAnyValue
      ? true
      : false
    : !isCommitStatusEmpty
  console.log('valueee', { value, isRuleValid })

  return [
    isRuleValid,
    value && !isCommitStatusEmpty
      ? `the commit status must be one of these values: ${value}`
      : 'the commit message must provide a commit status. Eg: [CLASSROOM], [SCHOOL], etc',
  ]
}
export default fuseCommitStatusEmptyRuleResolver
