export interface CommitlintConfigJira {
  rules: {
    [key: string]: number | (number | string | boolean | string[])[]
  }
}
declare const commitlintConfigJira: CommitlintConfigJira

export default commitlintConfigJira
