import { parseCommitMessage } from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const jiraTaskIdMaxLengthRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = 9,
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const nonValidTaskId =
    commitMessage.commitTaskIds &&
    value &&
    commitMessage.commitTaskIds.find(taskId => taskId.length > value)

  const isRuleValid = !nonValidTaskId

  return [
    isRuleValid,
    `${nonValidTaskId} taskId must not be longer than ${value} characters`,
  ]
}
export default jiraTaskIdMaxLengthRuleResolver
