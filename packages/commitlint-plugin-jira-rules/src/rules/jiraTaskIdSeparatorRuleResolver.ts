import {
  parseCommitMessage,
  commitlintJiraConstants,
} from 'commitlint-jira-utils'

import { TRuleResolver } from '../../@types'

const jiraTaskIdSeparatorRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = commitlintJiraConstants.TASK_ID_SEPARATOR,
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const nonValidTaskId = commitMessage.commitTaskIds.find(taskId => {
    return !new RegExp(commitlintJiraConstants.TASK_ID_SEPARATOR).test(taskId)
  })

  const isRuleValid = !nonValidTaskId

  return [
    isRuleValid,
    `${nonValidTaskId} taskId header and footer must be separated with "${value}" e.g: FUSEAI-2121`,
  ]
}
export default jiraTaskIdSeparatorRuleResolver
