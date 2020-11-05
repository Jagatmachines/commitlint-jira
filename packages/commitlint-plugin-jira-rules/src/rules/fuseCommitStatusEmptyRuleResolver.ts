import { parseCommitMessage } from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const fuseCommitStatusEmptyRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const isRuleValid = commitMessage.commitStatus.length > 0
  return [
    isRuleValid,
    `the commit message must provide a commit status. Eg: [CLASSROOM], [SCHOOL], etc`,
  ]
}
export default fuseCommitStatusEmptyRuleResolver
