const table = require("table")


function pointsToStringTable(points){

    let taleConfig = {
        border : table.getBorderCharacters("void"),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size;
          }
    }
    let elements = [
        ["Posición", "Puntos"]
    ]

    Object.keys(points).forEach(
        key =>{
            elements.push([key, points[key]])
        }
    )

    /*for(var entry of points.entries()){
        var key = entry[0],
            value = entry[1]
        elements.push([key, value])
    }*/

    return '`'+ table.table(elements, taleConfig) +'`'

}

module.exports = {
    pointsToStringTable : pointsToStringTable
}