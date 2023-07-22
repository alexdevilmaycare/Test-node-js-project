const fs = require('fs'); 
const {promises:fsp} = fs;
const config = require('../dbmodel/dbconfig.js')
const IDManager = require('../UniqueIDManager/UniqueIDManager.js'); 

class UserDatabase {
    static dbconfig = config();
    static async checkIfFileISAvailable () {
       const pathtoFolder = UserDatabase.dbconfig.pathToFolder
       const fileContents = await fsp.readdir(pathtoFolder);
       const fileName = UserDatabase.dbconfig.filename; 
       return fileContents.includes(fileName);              
    }
    static async getUserList () {
        const hasFileBeenCreated = await this.checkIfFileISAvailable();
        if (hasFileBeenCreated === false) {
            return [];
        }
        const filePath = UserDatabase.dbconfig.pathToFile; 
        const userStringified = await fsp.readFile(filePath, 'utf-8'); 
        return JSON.parse(userStringified); 
    } 
    static writeUsertoDb (content) {
        const pathToFile = UserDatabase.dbconfig.pathToFile;
        return fsp.writeFile(pathToFile, content);
    }
    static async updateDb (userObject) {
        const newID = await IDManager.CreateNewID();
        const newUSer = {...userObject, id:newID}
        
        const hasFileBeenCreated = await UserDatabase.checkIfFileISAvailable();
        if (hasFileBeenCreated === false) {
            const newListOfUsers = []
            newListOfUsers.push(newUSer);
            return this.writeUsertoDb(JSON.stringify(newListOfUsers));     
        }
        const currentListOfUsers = await UserDatabase.getUserList()
        currentListOfUsers.push(newUSer);
        return UserDatabase.writeUsertoDb(JSON.stringify(currentListOfUsers)); 
    }
    static async getIndividUser (id) {
        const isUserPresent = await IDManager.doesIDExist(id);
        if (isUserPresent === false) {
            return {}
        }
        const listOfUsers = await UserDatabase.getUserList(); 
        const [only] = listOfUsers.filter(user=> user.id === id);
        return only; 
    }
}

module.exports = UserDatabase; 