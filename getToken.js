const axios = require('axios');
// const environment = require('./env');
const { baseUrl, tagEnv } = require('./env')


// const baseUrl = environment.baseUrl;

async function getToken(guestNumber) {

  const url = `${baseUrl}/login`;
  const data = {
    "pax": `${guestNumber}`,
    "locale": "en-US"
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Host': `photogra.${tagEnv}.lab.rccl.com`,
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'Accept': 'application/json, text/plain, */*',
        'sec-ch-ua-platform': 'macOS',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        'Origin': `https://photogra.${tagEnv}.lab.rccl.com`,
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': `https://photogra.${tagEnv}.lab.rccl.com/${guestNumber}/en-US`,
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/json'
      }
    });

    const token = response.data.token;
    // console.log(`getToken: ${token}`);
    return token;

  } catch (error) {
    console.error(`${guestNumber} is not working, please take a look. Error to get token`);
    return undefined;
  }
}

module.exports = getToken;
