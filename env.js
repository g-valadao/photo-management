// const environment = {
//     celebrity: 'shiptst2',
//     royal: 'shipstg1',
//     baseUrl: `https://photogra.shiptst2.lab.rccl.com/CortexAPI/api`,
//     env: 'shiptst2'
//   };
// module.exports = environment;

const environments = {
  cel: { baseUrl: 'https://photogra.shiptst2.lab.rccl.com/CortexAPI/api', tagEnv: 'shiptst2', fileName: 'celebrity-accounts.txt' },
  royal: { baseUrl: 'https://photogra.shipstg1.lab.rccl.com/CortexAPI/api', tagEnv: 'shipstg1', fileName: 'royal-accounts.txt' }
};

const environment = process.env.NODE_ENV || 'royal';
const { baseUrl, tagEnv, fileName } = environments[environment];

module.exports = {
  baseUrl,
  tagEnv,
  fileName
};

/*
export NODE_ENV=cel
export NODE_ENV=royal
node main-new.js

*/
