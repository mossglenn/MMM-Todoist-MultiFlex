export default {
  '*': ['npm run prettier:fix'],
  '**/*.ts': () => ['npm run lint:fix', 'npm run build', 'git add MMM-Todoist-MultiFlex.js* node_helper.js*'],
};
