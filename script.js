/* ********* cpunter ****************** */

let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

// format: Date(year,month,day,hour,minute)
// year is counter from 0 to 1

let endDate = new Date(2022,11,31,23,59)
let endTime = endDate.getTime()

function countdown()
{
    let todayDate = new Date()
    // Output value in milliseconds
    let todayTime = todayDate.getTime()

    let remainingTime = endTime - todayTime

    // 60sec = 1000 milliseconds

    let oneMin = 60 * 1000

    // 1hr = 60min

    let oneHour = 60 * oneMin

    // 1 day = 24 hours

    let oneDay = 24 * oneHour

    let addZeros = num => num < 10 ? `0${num}` : num
    // if endDate is before today date

    if (endTime < todayTime)
    {
        document.querySelector('.countdown').innerHTML = `<h1>CountDown has expired!</h1>`

        // if endDate is not before today date
    }
    else
    {
        // calculating remaining days, hours, minutes, seconds
        let daysLeft = Math.floor(remainingTime / oneDay)
        let hoursLeft = Math.floor((remainingTime % oneDay) / oneHour)
        let minsLeft = Math.floor((remainingTime % oneHour) / oneMin)
        let secLeft = Math.floor((remainingTime % oneMin) / 1000)
        console.log(daysLeft,hoursLeft,minsLeft,secLeft)

        // display values

        dayBox.textContent = addZeros(daysLeft)
        hrBox.textContent = addZeros(hoursLeft)
        minBox.textContent = addZeros(minsLeft)
        secBox.textContent = addZeros(secLeft)


    }

}

let i = setInterval(countdown,1000)
