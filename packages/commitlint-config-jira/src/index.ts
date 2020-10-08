import { commitlintJiraConstants } from 'commitlint-jira-utils'
import { CommitlintConfigJira } from '../@types'

export const commitlintConfigJira: CommitlintConfigJira = {
  rules: {
    // 1 -> because useful on parsing
    [commitlintJiraConstants.JIRA_RULES.commitMessageSeparator]: [
      2,
      'always',
      commitlintJiraConstants.COMMIT_MESSAGE_SEPARATOR,
    ],
    // 2 -> because useful also on parsing
    [commitlintJiraConstants.JIRA_RULES.taskIdEmpty]: [2, 'always'],
    // 3 -> because project-key rule and others depend on it
    [commitlintJiraConstants.JIRA_RULES.taskIdCase]: [
      2,
      'always',
      commitlintJiraConstants.UPPERCASE,
    ],
    // 4
    [commitlintJiraConstants.JIRA_RULES.taskIdProjectKey]: [2, 'always', false],
    // 5
    [commitlintJiraConstants.JIRA_RULES.taskIdSeparator]: [
      2,
      'always',
      commitlintJiraConstants.TASK_ID_SEPARATOR,
    ],
    // 6
    [commitlintJiraConstants.JIRA_RULES.taskIdMinLength]: [2, 'always', 3],
    // 7
    [commitlintJiraConstants.JIRA_RULES.taskIdMaxLength]: [2, 'always', 9],
    // 8
    [commitlintJiraConstants.JIRA_RULES.commitStatusCase]: [
      2,
      'always',
      commitlintJiraConstants.UPPERCASE,
    ],
  },
}

export default commitlintConfigJira
