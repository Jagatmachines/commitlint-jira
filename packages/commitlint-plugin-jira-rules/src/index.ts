import { commitlintJiraConstants } from 'commitlint-jira-utils'
import { CommitlintPluginJira } from '../@types'
import jiraTaskIdMaxLengthRuleResolver from './rules/jiraTaskIdMaxLengthRuleResolver'
import jiraTaskIdMinLengthRuleResolver from './rules/jiraTaskIdMinLengthRuleResolver'
import jiraTaskIdEmptyRuleResolver from './rules/jiraTaskIdEmptyRuleResolver'
import jiraTaskIdSeparatorRuleResolver from './rules/jiraTaskIdSeparatorRuleResolver'
import jiraTaskIdCaseRuleResolver from './rules/jiraTaskIdCaseRuleResolver'
import jiraCommitStatusCaseRuleResolver from './rules/jiraCommitStatusCaseRuleResolver'
import jiraCommitMessageSeparatorRuleResolver from './rules/jiraCommitMessageSeparatorRuleResolver'
import jiraTaskIdProjectKeyRuleResolver from './rules/jiraTaskIdProjectKeyRuleResolver'
import fuseCommitStatusEmptyRuleResolver from './rules/fuseCommitStatusEmptyRuleResolver'

export const commitlintPluginJira: CommitlintPluginJira = {
  rules: {
    [commitlintJiraConstants.JIRA_RULES
      .taskIdEmpty]: jiraTaskIdEmptyRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .taskIdMinLength]: jiraTaskIdMinLengthRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .taskIdMaxLength]: jiraTaskIdMaxLengthRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .taskIdSeparator]: jiraTaskIdSeparatorRuleResolver,
    [commitlintJiraConstants.JIRA_RULES.taskIdCase]: jiraTaskIdCaseRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .taskIdProjectKey]: jiraTaskIdProjectKeyRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .commitStatusCase]: jiraCommitStatusCaseRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .commitMessageSeparator]: jiraCommitMessageSeparatorRuleResolver,
      [commitlintJiraConstants.JIRA_RULES
        .commitStatusEmpty]: fuseCommitStatusEmptyRuleResolver,
  },
}

export default commitlintPluginJira
