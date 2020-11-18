import {
  commitlintJiraConstants,
  parseCommitMessage,
} from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const jiraTaskIdCaseRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = 'uppercase',
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  let nonValidTaskId = ''

  if (value === commitlintJiraConstants.UPPERCASE)
    nonValidTaskId =
      (commitMessage.commitTaskIds &&
        commitMessage.commitTaskIds.find(taskId => {
          return taskId !== taskId.toUpperCase()
        })) ||
      ''

  if (value === commitlintJiraConstants.LOWERCASE)
    nonValidTaskId =
      (commitMessage.commitTaskIds &&
        commitMessage.commitTaskIds.find(taskId => {
          return taskId !== taskId.toLowerCase()
        })) ||
      ''

  const isRuleValid = !nonValidTaskId

  return [isRuleValid, `${nonValidTaskId} taskId must be ${value} case`]
}
export default jiraTaskIdCaseRuleResolver
