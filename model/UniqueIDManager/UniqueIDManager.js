const idGen = require('uniqid');
const getIDManagerConfig = require('../UniqueIDManager/IDGenConfig.js'); 
const fs = require('fs');
const {promises:fsp} = fs; 


class UniqueIDManager {
    static config = getIDManagerConfig();
    static  async doesFileExist () {
        const folderpath = UniqueIDManager.config.pathToFolder;
        const fileName = UniqueIDManager.config.fileName; 
        const folderContents = await fsp.readdir(folderpath);
        return folderContents.includes(fileName);  
    } 
    static async doesIDExist(id) {
        const doesFileExist = await UniqueIDManager.doesFileExist();
        if (doesFileExist === false) {
            return false;
        }
        const filePath = UniqueIDManager.config.pathToFile; 
        const contents = await fsp.readFile(filePath, 'utf-8');
        const IDsArray = JSON.parse(contents); 
        return IDsArray.includes(id);
    }
    static async CreateNewID () {
        let newID = idGen();
        const filePath = UniqueIDManager.config.pathToFile; 
        const doesFileExist = await UniqueIDManager.doesFileExist();
        if (doesFileExist === false) {
            const ids = []; 
            ids.push(newID); 
            const stringfifiedIDs = JSON.stringify(ids); 
            await fsp.writeFile(filePath, stringfifiedIDs); 
            return newID; 
        }
        const fileContents = await fsp.readFile(filePath, 'utf-8'); 
        const IDsArray = JSON.parse(fileContents); 
     
        while (IDsArray.includes(newID)) {
            newID = idGen();
        }
        IDsArray.push(newID); 
        const newString = JSON.stringify(IDsArray); 
        await fsp.writeFile(filePath, newString); 
        return newID; 
    }
}

module.exports = UniqueIDManager; 