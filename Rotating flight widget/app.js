const tableBody = document.getElementById('table-body')

let flights = [
    {
        time:"8:00",
        destination:"Manchester",
        flight:"MAN 206",
        gate:"A 01",
        ramarka:"ON TIME"
    },
    {
        time:"13:06",
        destination:"London",
        flight:"LDN GAT 206",
        gate:"b 09",
        ramarka:"CANCELLED"
    },
    {
        time:"19:00",
        destination:"Helsinki",
        flight:"HEL 204",
        gate:"C 02",
        ramarka:"ON TIME"
    },
    {
        time:"9:15",
        destination:"Turku",
        flight:"Tku 509",
        gate:"A 01",
        ramarka:"ON TIME"
    },
    {
        time:"2:00",
        destination:"Frankfurt",
        flight:"fr 206",
        gate:"D 06",
        ramarka:"CANCELLED"
    }

]

const destinations = ["FRANKFURT", "HELSINKI", "LONDON", "MANCHESTER", "TURKU"]
const remarks = ["ON TIME", "CANCELLED", "ON TIME", "DELAYED"]
let hour = 15

function populateTable(){
    for (const flight of flights){
       const tableRow =  document.createElement("tr")

       for( const flightDetail in flight) {
       const tableCell = document.createElement("td")
       const word = Array.from(flight[flightDetail])

       for(const [index,letter] of word.entries()) {
        const letterElement = document.createElement('div')

        setTimeout(() => {
            letterElement.classList.add('flip')
            letterElement.textContent = letter
            tableCell.append(letterElement)
        }, 100 * index)


       }


       tableRow.append(tableCell)
       }

       tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber){
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour

    if(hour < 24) {
        hour++
    }

    if(hour >= 24) {
        hour = 1
        displayHour = hour
    }

    if (hour < 10) {
        displayHour = "0" + hour
    }

    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight:generateRandomLetter() + generateRandomLetter() + "" + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + "" + generateRandomNumber() + generateRandomNumber(),
        ramarks:remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 2000)