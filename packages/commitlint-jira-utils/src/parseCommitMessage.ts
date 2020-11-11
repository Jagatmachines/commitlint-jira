import { TParseCommitMessage } from '../@types'
import {
  COMMIT_DESCRIPTION_SEPARATOR,
  COMMIT_MESSAGE_SEPARATOR,
  COMMIT_STATUS_SEPARATORS,
  COMMIT_TASK_IDS_SEPARATOR,
  COMMIT_TASK_STATUS_PATTERN,
} from './commitlintJiraConstants'

const parseCommitMessage: TParseCommitMessage = rawCommitMessage => {
  /**
   * Description separator is used to separe commit parts without description
   * Read more about this issue: https://github.com/Gherciu/commitlint-jira/issues/6
   */
  const commitMessage = rawCommitMessage
    .split(COMMIT_DESCRIPTION_SEPARATOR)
    .filter(commitMessageSeparatedPart => commitMessageSeparatedPart)[0]
  const commitMessageParts = commitMessage.split(COMMIT_MESSAGE_SEPARATOR)

  /**
   * if commit parts length is greater or equal with 2 return part one else
   * commit parts length is less than 2 it means that task ids is not provided
   * or is not separated corectly
   */
  const rawCommitHeader =
    commitMessageParts.length >= 2
      ? COMMIT_MESSAGE_SEPARATOR === ' '
        ? `${commitMessageParts[0]} ${commitMessageParts[1]}`
        : commitMessageParts[0]
      : ''
  const commitHeader = rawCommitHeader
    .replace(COMMIT_TASK_STATUS_PATTERN, '')
    .trim()
  /**
   * if commit parts length is greater than 2 return all parts without first part
   * because first part is commit header
   * Note: rest of parts should be joined with COMMIT_MESSAGE_SEPARATOR
   *  because is posible that the commit message footer to contain symbols equal
   *  with  COMMIT_MESSAGE_SEPARATOR then the commit footer will be resolved incorect
   * More info about this issue: https://github.com/Gherciu/commitlint-jira/issues/7
   */
  const commitFooter =
    commitMessageParts.length > 2
      ? COMMIT_MESSAGE_SEPARATOR === ' '
        ? commitMessageParts
            .filter((_value, index) => index > 1)
            .join(COMMIT_MESSAGE_SEPARATOR)
            .trim()
        : commitMessageParts
            .filter((_value, index) => index > 0)
            .join(COMMIT_MESSAGE_SEPARATOR)
            .trim()
      : commitMessageParts[commitMessageParts.length - 1].trim()

  const rawCommitStatus = rawCommitHeader.split(COMMIT_STATUS_SEPARATORS.end)
  const commitStatus = rawCommitStatus.length
    ? rawCommitStatus[0].replace(COMMIT_STATUS_SEPARATORS.start, '').trim()
    : ''

  const commitTaskIds = commitHeader
    .split(COMMIT_TASK_IDS_SEPARATOR)
    .map(taskId => taskId.trim())
    .filter(taskId => taskId)

  return {
    commitTaskIds,
    commitFooter,
    commitHeader,
    commitStatus,
  }
}

export default parseCommitMessage
