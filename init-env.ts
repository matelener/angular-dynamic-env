import {writeFile} from 'fs';

require('dotenv-safe').config();
const envFile = {
  apiUrl: process.env.API_URL,
  name: process.env.NAME,
  prod: process.env.PROD
};

writeFile('src/environment/environment.json', JSON.stringify(envFile), (err) => {
  if (err) {
    console.log(err);
  }
});
