const path = require('path');

const getConfig =()=> {
    const filename = 'userdata.json';
    const folderName = 'userJSONdata';
    const config = {
        filename: filename,
        folderName: folderName, 
        pathToFile:path.join(__dirname, '..', '..', folderName, filename),
        pathToFolder: path.join(__dirname, '..', '..', folderName) 
    }
    return config 
}

module.exports = getConfig; 