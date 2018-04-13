

const initialState = {
    chosenHomeName: "",
    chosenHomeId: "",
    chosenHomeType: "",
    chosenHomePrice: "",
    chosenHomeSummary: "",
    chosenHomePic: "",
    chosenHomeStreet: "",
    chosenHomeCity: "",
    chosenHomeState: "",
    chosenHomeCountry: "",
    chosenHomeZip: "",
    chosenHomeLat: "",
    chosenHomeLong: "",
    chosenHomeBooked: "",

    searchResults: ""
}

const CHOSEN = "CHOSEN"
const TYPED = "TYPED"
const PUSH = 'ROUTER/PUSH';
const REPLACE = 'ROUTER/REPLACE';
const GO = 'ROUTER/GO';
const GO_BACK = 'ROUTER/GO_BACK';
const GO_FORWARD = 'ROUTER/GO_FORWARD';
const LOCATION_CHANGE = 'ROUTER/LOCATION_CHANGE';
const SEARCH_RESULTS = "SEARCH_RESULTS"

function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPED:
            let { text } = action
            return { ...state, message: action.payload }
        case CHOSEN:
            let { name, id, type, price, summary, pic, street, city, state, country, zip, lat, long, booked } = action
            return {
                ...state,
                chosenHomeName: action.payload[0],
                chosenHomeId: action.payload[1],
                chosenHomeType: action.payload[2],
                chosenHomePrice: action.payload[3],
                chosenHomeSummary: action.payload[4],
                chosenHomePic: action.payload[5],
                chosenHomeStreet: action.payload[6],
                chosenHomeCity: action.payload[7],
                chosenHomeState: action.payload[8],
                chosenHomeCountry: action.payload[9],
                chosenHomeZip: action.payload[10],
                chosenHomeLat: action.payload[11],
                chosenHomeLong: action.payload[12],
                chosenHomeBooked: action.payload[13]
            }
        case SEARCH_RESULTS:
            let { results } = action
            return {
                ...state,
                searchResults: action.payload
            }

        default: return state;
    }

}

export function search(results) {
    return {
        type: SEARCH_RESULTS,
        payload: results
    }
}

export function chosen(name, id, type, price, summary, pic, street, city, state, country, zip, lat, long, booked) {
    return {
        type: CHOSEN,
        payload: [name, id, type, price, summary, pic, street, city, state, country, zip, lat, long, booked]
    }
}


export function isTyped(text) {
    return {
        type: TYPED,
        payload: text
    }
}

export function complete(a) {
    const todoItem = document.getElementById(a)
    const button = document.getElementById(a + 'complete')
    todoItem.className = "todo-completed"
    button.setAttribute('disabled', 'true')
    button.className = 'disabled'
    return {
        type: "COMPLETE",
        payload: a
    }
}

export function deleteThis(a) {
    const todoItem = document.getElementById(a).remove()
    return {
        type: "DELETE",
        payload: a
    }
}

export default reducer;  