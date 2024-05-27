const getToken = require('./getToken');
const getBookIds = require('./getBookId');
const {getAllPhotoIdList, getSelectablePhotoIds, getRemoveblePhotoIds} = require('./getPhotoId');
const addPhoto = require('./addPhoto');
const removePhoto = require('./removePhoto');
const guestRefNumber = require('./getGuestRefNumber');
const { baseUrl, tagEnv, fileName } = require('./env')


removeAllPhotos(fileName);

/**
 * processFile					refnumberlist
 * processGuestRefNumberList	tokenList
 * processTokenList				token + bookIdList
 * processBookIdList            token + photoIdList
 * addPhotoIdList               status
 */

async function removeAllPhotos(fileName) {
    processFile(fileName)
    .then(processGuestRefNumberList)
    .then(processTokenList)
    .then(processBookIdList)
    .then(removePhotoIdList)
    .catch(error => {
        console.error('error:', error);
      });
}

async function processFile(fileName) {
	const guestRefNumberList = await guestRefNumber(fileName);
    console.log(guestRefNumberList);
	return guestRefNumberList;
}

async function processGuestRefNumberList(guestRefNumberList) {
	const tokenList = []
	for (const guestNumber of guestRefNumberList) {
		try {
            const token = await getToken(guestNumber);
            if(token !== undefined) {
                console.log(`Token of guestNumber ${guestNumber}:`, token);
                tokenList.push(token)
            }
        } catch (error) {
            console.error(`Error getting token for guestNumber ${guestNumber}: `, error.message);
            throw error;
        }
	}
    console.log(tokenList)
	return tokenList;
}

async function processTokenList (tokenList) {
    const bookIdListWithToken = []
    
    for(const token of tokenList) {
        try {
            const bookIdList = await getBookIds(token);
            bookIdListWithToken.push({token, bookIdList});
        } catch (error) {
            console.error(`Error getting bookIdList of tokenList ${tokenList}: `, error.message);
            throw error;
        }
    }
    
    console.log(bookIdListWithToken)
    return bookIdListWithToken
}

async function processBookIdList (bookIdListWithToken) {
    
    const photoIdListWithToken = []
    
    for(const obj of bookIdListWithToken) {

        const token = obj.token;
        const bookIdList =  obj.bookIdList;
        
        for(const bookId of bookIdList) {
            const photoIdList = await getAllPhotoIdList(token,bookId);
            photoIdListWithToken.push({token,photoIdList})
        }
    }
    
    console.log(photoIdListWithToken)
    return photoIdListWithToken
}

async function removePhotoIdList (photoIdListWithToken) {

    var count = 0 

    for(const obj of photoIdListWithToken) {
        const token = obj.token;
        const photoIdList =  obj.photoIdList;

        for(const photoId of photoIdList) {
            const status = await removePhoto(token,photoId);
            if(status) {
                count++;
            } 
        }
        console.log(`${count} phtotos removed to ${token}`)
    }
    return count;
}
