require('dotenv').config();
const { info } = require('console');
var app = require('./app');

app.listen(process.env.PORT || 8082, () => {
  console.info('SERVER IS UP !!  All api listening on port: ' + (process.env.PORT || 8082));
})
