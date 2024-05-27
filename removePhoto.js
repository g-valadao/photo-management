const axios = require('axios');
const environment = require('./env');

const baseUrl = environment.baseUrl;

async function removePhoto(token, photo) {
  const url = `${baseUrl}/event/browse/remove/${photo}/${token}`;

  try {
    const response = await axios.get(url);

    console.log(url);
    console.log(response.data);
    console.log(response.status);
    
    return !response.data;


  } catch (error) {
    console.error('Error to remove photo...\n', error.message);
  }
}

module.exports = removePhoto;
