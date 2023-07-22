const path = require('path'); 

const getIDGenConfig = ()=> {
    const folderName = 'userJSONdata';
    const fileName = 'userIDs.json';
    const config = {
        fileName: fileName, 
        folderName: folderName, 
        pathToFolder: path.join(__dirname, '..', '..', folderName),
        pathToFile: path.join(__dirname, '..', '..', folderName, fileName)
    }
    return config; 
}

module.exports = getIDGenConfig; 