import { parseCommitMessage } from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const jiraTaskIdProjectKeyRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value,
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  let isRuleValid = false
  let nonValidTaskId = null
  if (!value) {
    // Value is set to false, i.e. disabled the rule by default
    return [true]
  }
  if (typeof value !== 'string' && !Array.isArray(value) && value) {
    return [false, 'jira project key should be a string or an array of strings']
  }

  commitMessage.commitTaskIds &&
    commitMessage.commitTaskIds.forEach(taskId => {
      if (
        typeof value === 'string' &&
        taskId &&
        new RegExp(`^${value}`).test(taskId)
      ) {
        nonValidTaskId = taskId
      } else if (Array.isArray(value)) {
        value.forEach(projectKey => {
          if (new RegExp(`^${projectKey}`).test(taskId)) {
            nonValidTaskId = taskId
          } else {
            nonValidTaskId = commitMessage.commitTaskIds[0]
          }
        })
      } else {
        nonValidTaskId = commitMessage.commitTaskIds[0]
      }
    })

  isRuleValid = !!nonValidTaskId
  console.log('isididid', value, typeof value, Array(value).join('|'))
  return [
    isRuleValid,
    `${nonValidTaskId} taskId must start with project key ${
      typeof value === 'string' ? value : value && Array(value).join('or')
    }`,
  ]
}

export default jiraTaskIdProjectKeyRuleResolver
