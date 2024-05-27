const axios = require('axios');
// const environment = require('./env');
const { baseUrl } = require('./env')


// const baseUrl = environment.baseUrl;

async function getBookIds(token) {
  const url = `${baseUrl}/event/browse/${token}`;

  try {
    const response = await axios.get(url);

    const listaDeIDs = [];

    for (const dia of response.data) {
      if (dia.items) {
        for (const item of dia.items) {
          if (item.items) {
            for (const item2 of item.items) {
              listaDeIDs.push(item2.id);
            }
          } else {
            listaDeIDs.push(item.id);
          }
        }
      } else {
        listaDeIDs.push(dia.id);
      }
    }

    // console.log(`getBookIds: ${listaDeIDs}`);
    return listaDeIDs;

  } catch (error) {
    console.error('Error to find BookId...\n', error.message);
  }
}

module.exports = getBookIds;
