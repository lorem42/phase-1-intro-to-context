// Your code here
const createEmployeeRecord = function(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(arr){
    return arr.map((e) => {
        return createEmployeeRecord(e)
    })
}

const createTimeInEvent = function (arr, time){
    const timeArr = time.split(" ")
    const date = timeArr[0]
    const hour = parseInt(timeArr[1])
    arr.timeInEvents.push({
        type:"TimeIn",
        date: date,
        hour:  hour
    })
    return arr
}

const createTimeOutEvent = function (arr, time){
    const timeArr = time.split(" ")
    const date = timeArr[0]
    const hour = parseInt(timeArr[1])
    arr.timeOutEvents.push({
        type:"TimeOut",
        date: date,
        hour:  hour
    })
    return arr
}


const hoursWorkedOnDate = function(arr, date){
    let totalHours = 0
    arr.timeInEvents.forEach(e => {
        if(e.date === date){
            totalHours += e.hour
        }
    })
    arr.timeOutEvents.forEach(e => {
        if(e.date === date){
            totalHours -= e.hour
        }
    })
    return Math.abs(totalHours) / 100
}

const wagesEarnedOnDate = function(arr, date){
    let totalWages = 0
    arr.timeInEvents.forEach(e => {
        if(e.date === date){
            totalWages += e.hour * arr.payPerHour
        }
    })
    arr.timeOutEvents.forEach(e => {
        if(e.date === date){
            totalWages -= e.hour * arr.payPerHour
        }
    })
    return Math.abs(totalWages) / 100
}


const allWagesFor = function(arr){ 
    let totalWages = 0;
    arr.timeInEvents.map(e => {
        totalWages += wagesEarnedOnDate(arr, e.date)
    })
   return Math.abs(totalWages)
}

const calculatePayroll = (arr) => {
    let totalWages = 0;
    arr.map(e => {
        totalWages += allWagesFor(e)
    })
    return Math.abs(totalWages)
}
