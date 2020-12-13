const table = require("table")


function driversToStringTable(drivers){

    let taleConfig = {
        border : table.getBorderCharacters("void"),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size;
          }
    }
    let elements = [
        ["Piloto", "Numero"]
    ]

    drivers.forEach(driver => {
        elements.push([driver.name, driver.number])
    });

    return '`' + table.table(elements, taleConfig) + '`'

}

module.exports = {
    driversToStringTable: driversToStringTable
}