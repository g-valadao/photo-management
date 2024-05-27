const axios = require('axios');
// const environment = require('./env');
const { baseUrl, tagEnv } = require('./env')


// const baseUrl = environment.baseUrl;

async function getAllPhotoIdList(token, bookId) {
  const url = `${baseUrl}/event/photos/${bookId}/${token}`;

  try {
    const response = await axios.get(url);

    const itensMarcados = response.data.flatMap(item => item.photos.map(photo => photo[0]));
    // const itensMarcados = response.data.flatMap(item => item.photos.filter(photo => photo[1] === 0).map(photo => photo[0]));
    // const itensMarcados = response.data.flatMap(item => item.photos.filter(photo => photo[1] === 1).map(photo => photo[0]));

    // console.log(`getAllPhotoIdList: ${itensMarcados}`);
    return itensMarcados;


  } catch (error) {
    console.error('Error to find PhotoIdList...\n', error.message);
  }
}

async function getSelectablePhotoIds(token, bookId) {
  const url = `${baseUrl}/event/photos/${bookId}/${token}`;

  try {
    const response = await axios.get(url);
    const itensMarcados = response.data.flatMap(item => item.photos.filter(photo => photo[1] === 0).map(photo => photo[0]));

    return itensMarcados;
  } catch (error) {
    console.error('Error to find PhotoIdList...\n', error.message);
  }
}

async function getRemoveblePhotoIds(token, bookId) {
  const url = `${baseUrl}/event/photos/${bookId}/${token}`;

  try {
    const response = await axios.get(url);
    const itensMarcados = response.data.flatMap(item => item.photos.filter(photo => photo[1] === 1).map(photo => photo[0]));

    return itensMarcados;
  } catch (error) {
    console.error('Error to find PhotoIdList...\n', error.message);
  }
}

module.exports = {
  getAllPhotoIdList,
  getSelectablePhotoIds,
  getRemoveblePhotoIds
};
