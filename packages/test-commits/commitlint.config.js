module.exports = {
  plugins: ['commitlint-plugin-jira-rules'],
  extends: ['jira'],
  rules: {
    'jira-task-id-min-length': [2, 'always', 4],
    'jira-task-id-max-length': [2, 'always', 7],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['FUSEAI-'],
    },
  },
}
