const fs = require('fs');

// const fileName = 'royal-accounts.txt';

async function getGuestRefNumber (fileName) {
  
  const guestRefNumber = [];
  try {
    const data = await fs.promises.readFile(fileName, 'utf8');
    const lines = data.split('\n');

    lines.forEach((line) => {
      const values = line.split('\t');
      if(values[1] != "GuestRefNumber"){
          guestRefNumber.push(values[1]);
      }
    });  

  } catch (error) {
    throw new Error('Error to read file: ', error.message);
  }
  
  console.log(`List of guestRefNumber: ${guestRefNumber}`)
  return guestRefNumber;
}

module.exports = getGuestRefNumber;