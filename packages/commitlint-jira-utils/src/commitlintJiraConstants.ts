export const JIRA_RULES = {
  commitStatusCase: 'jira-commit-status-case',
  taskIdCase: 'jira-task-id-case',
  taskIdSeparator: 'jira-task-id-separator',
  taskIdEmpty: 'jira-task-id-empty',
  taskIdMaxLength: 'jira-task-id-max-length',
  taskIdMinLength: 'jira-task-id-min-length',
  commitMessageSeparator: 'jira-commit-message-separator',
}

export const COMMIT_MESSAGE_SEPARATOR = ':'
export const COMMIT_TASK_IDS_SEPARATOR = ','
export const COMMIT_TASK_STATUS_PATTERN = /\[.*\]/gi
export const TASK_ID_SEPARATOR = '-'
export const COMMIT_STATUS_SEPARATORS = {
  start: '[',
  end: ']',
}
export const UPPERCASE = 'uppercase'
export const LOWERCASE = 'lowercase'
export const COMMIT_DESCRIPTION_SEPARATOR = '\n'
