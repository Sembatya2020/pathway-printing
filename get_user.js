const https = require('https');
const options = {
  hostname: 'api.github.com',
  path: '/user',
  headers: {
    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    'User-Agent': 'Node.js'
  }
};
https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const user = JSON.parse(data);
      console.log('LOGIN:' + user.login);
    } catch (e) {
      console.log('ERR:' + data);
    }
  });
}).on('error', (e) => console.log('REQ_ERR:' + e.message));
