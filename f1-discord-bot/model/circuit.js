class Circuit{

    constructor(name = '', distance = -1, country = '', turns = -1){
        
        this.name = name
        this.distance = distance
        this.country = country
        this.turns = turns
    }

    static fromJSON(jsonCircuit){
        
        let name = ''
        let distance = ''
        let country = ''
        let turns = ''

        if (jsonCircuit.hasOwnProperty('Name')){
            name = jsonCircuit['Name']
        }
        if (jsonCircuit.hasOwnProperty('Distance')){
            distance = jsonCircuit['Distance']
        }
        if (jsonCircuit.hasOwnProperty('Country')){
            country = jsonCircuit['Country']
        }
        if (jsonCircuit.hasOwnProperty('Turns')){
            turns = jsonCircuit['Turns']
        }

        return new Circuit(name = name, distance = distance, country = country, turns = turns)
    }
}

module.exports = {
    Circuit : Circuit
}