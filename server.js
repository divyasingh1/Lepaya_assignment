require('dotenv').config();
const app = require('./app');

app.listen(process.env.PORT || 8082, () => {
  //server started at desired port
  console.info('SERVER IS UP !!  All api listening on port: ' + (process.env.PORT || 8082));
})
