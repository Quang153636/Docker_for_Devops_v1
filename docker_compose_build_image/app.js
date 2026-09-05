// app.js
const appName = process.env.APP_NAME || 'Unknown';
const environment = process.env.ENVIRONMENT || 'Unknown';
const node_env = process.env.NODE_ENV || 'Unknown';
console.log(`Running ${appName} in ${environment} environment and ${node_env}`);
