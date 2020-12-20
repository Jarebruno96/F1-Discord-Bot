class Calendar{

    constructor(season = '', events = [] ){

        this.season = season
        this.events = events
    }

    static fromJSON(jsonCalendar){

        let season = ''
        let events = []

        if (jsonCalendar.hasOwnProperty('Season')){
            season = jsonCalendar['Season']
        }

        if (jsonCalendar.hasOwnProperty('Events')){

            let jsonEvents = jsonCalendar['Events']

            jsonEvents.forEach(jsonEvent => {
                events.push(Event.fromJSON(jsonEvent))
            })
        }

        return new Calendar(season = season, events = events)
    }
}


class Event{

    constructor(day = '', circuit = ''){
        
        this.day = day
        this.circuit = circuit
    }

    static fromJSON(jsonEvent){

        let day = ''
        let circuit = ''

        if (jsonEvent.hasOwnProperty('Day')){
            day = jsonEvent['Day']
        }

        if (jsonEvent.hasOwnProperty('Circuit')){
            circuit = jsonEvent['Circuit']
        }

        return new Event(day = day, circuit = circuit)
    }
}

module.exports = {
    Calendar: Calendar,
    Event: Event
}