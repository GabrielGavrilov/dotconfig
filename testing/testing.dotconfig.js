const fs = require('fs');

function generateConfig() {
    let configObject = {}
    try {
        const configFile = fs.readFileSync('./testing/testing.config', 'utf-8');
        let configArray = configFile.toString().replace(/\r\n/g, '\n').split('\n')
        
        for(let i = 0; i < configArray.length; i++) {
            let data = configArray[i].toString().split('=')

            if(data[0]) {

                if(data[0].toString().toLowerCase() == "string") {
                    let stringValue;
                    try {
                        stringValue = data[2].toString()
                        configObject[data[1]] = stringValue
                    } catch(err) {
                        throw err;
                    }
                } else if(data[0].toString().toLowerCase() == "number") {
                    let stringValue;
                    let intValue;
                    try {
                        stringValue = data[2].toString()
                        intValue = parseInt(stringValue)
                        configObject[data[1]] = intValue
                    } catch(err) {
                        throw err;
                    }
                } else if(data[0].toString().toLowerCase() == "boolean") {
                    let stringValue;
                    let boolValue;
                    try {
                        stringValue = data[2].toString().toLowerCase()
                        if(stringValue == "true") {
                            boolValue = JSON.parse('true')
                            configObject[data[1]] = boolValue
                        } else if(stringValue == "false") {
                            boolValue = JSON.parse('false')
                            configObject[data[1]] = boolValue
                        } else {
                            const error = "The boolean data type you've provided, is not a real boolean."
                            throw error;
                        }
                    } catch(err) {
                        throw err;
                    }
                } else {
                    const error = "Invalid data type. Please provide a valid data type."
                    throw error;
                }

            } else if(!data[0]) {
                const error = "You must provide a data type."
                throw error
            }
        }
    } catch(err) {
        throw err;
    }
    

    return configObject
}

module.exports = generateConfig();
