let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let weekDay = date.getDay()
let hour = date.getHours()
let minute = date.getMinutes()
let secund = date.getSeconds()
let millisek = date.getMilliseconds()
let name = "Bahasssjons aha"
let surname = "Ro'ziyev"
let middlename = "Rustam ugli"
let num = `5`


let weekDays = ["Sunday", "Monday", "Tuesday", "Wenthday", "Thuesday", "Friday", "Saturday"]
document.getElementById("demo1").innerHTML = `Today is: ${weekDays[weekDay]} \n Current Time is: ${hour%12} PM : ${minute} : ${secund}`
