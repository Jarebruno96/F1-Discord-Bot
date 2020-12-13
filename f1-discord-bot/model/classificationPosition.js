class ClassificationPosition{

    constructor(name = "", points = 0){
        this.name = name
        this.points = points
    }

    static fromJSON(jsonClassificationPosition){
        
        let name = ""
        let points = 0

        if (jsonClassificationPosition.hasOwnProperty('Name')){
            name = jsonClassificationPosition['Name']
        }
        if (jsonClassificationPosition.hasOwnProperty('Points')){
            points = jsonClassificationPosition['Points']
        }

        return new ClassificationPosition(name = name, points = points)
    }
}

module.exports = {
    ClassificationPosition : ClassificationPosition
}