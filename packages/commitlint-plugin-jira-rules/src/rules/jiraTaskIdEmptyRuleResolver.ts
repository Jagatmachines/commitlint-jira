import {
  parseCommitMessage,
  commitlintJiraConstants,
} from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const jiraTaskIdEmptyRuleResolver: TRuleResolver = parsed => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const isRuleValid = commitMessage.commitTaskIds.length > 0
  return [
    isRuleValid,
    `the commit message must provide minimum one task id followed by (${commitlintJiraConstants.COMMIT_MESSAGE_SEPARATOR}) symbol, if task not have an id use a conventional task id e.g: "FUSEAI-0000${commitlintJiraConstants.COMMIT_MESSAGE_SEPARATOR} My commit message"`,
  ]
}
export default jiraTaskIdEmptyRuleResolver
