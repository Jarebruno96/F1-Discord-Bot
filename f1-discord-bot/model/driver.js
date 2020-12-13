class Driver{

    constructor(name = "", number = ""){
        this.name = name
        this.number = number
    }

    static fromJSON(jsonDriver) {

        let name
        let number

        if (jsonDriver.hasOwnProperty('Name')){
            name = jsonDriver['Name']
        }

        if (jsonDriver.hasOwnProperty('Number')){
            number = jsonDriver['Number']
        }

        return new Driver(name = name, number = number)
    }
}

module.exports = {
    Driver: Driver
}