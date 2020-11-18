import {
  commitlintJiraConstants,
  parseCommitMessage,
} from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const jiraCommitStatusCaseRuleResolver: TRuleResolver = (
  parsed,
  _when,
  value = commitlintJiraConstants.UPPERCASE,
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  /* when commit status must be mandatory if commit status case is defined */
  // if (commitMessage.commitStatus && !rawCommitMessage.includes('['))
  //   return [
  //     false,
  //     `The commit message must provide a commit status. Eg: [CLASSROOM], [SCHOOL], etc`,
  //   ]

  let isRuleValid = false

  if (
    value === commitlintJiraConstants.UPPERCASE &&
    commitMessage.commitStatus === commitMessage.commitStatus.toUpperCase()
  )
    isRuleValid = true
  if (
    value === commitlintJiraConstants.LOWERCASE &&
    commitMessage.commitStatus === commitMessage.commitStatus.toLowerCase()
  )
    isRuleValid = true

  return [
    isRuleValid,
    `${commitMessage.commitStatus} commitStatus must be ${value} case`,
  ]
}
export default jiraCommitStatusCaseRuleResolver
