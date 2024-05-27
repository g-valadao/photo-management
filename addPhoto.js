const axios = require('axios');
// const environment = require('./env');
const { baseUrl, tagEnv } = require('./env')

// const baseUrl = environment.baseUrl;

async function addPhoto(token, photo) {
  const url = `${baseUrl}/event/browse/add/${photo}/${token}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    console.log(response.status);
    return response.data;


  } catch (error) {
    console.error('Error to add photo...\n', error.message);
  }
}

module.exports = addPhoto;
