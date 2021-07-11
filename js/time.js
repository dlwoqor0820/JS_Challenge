
const clock = document.querySelector("#clock");
const days = document.querySelector("#calender");
const dayArr = ["Sun", "Mon", "Tue", "Wen", "Thr", "Fri", "Sat"];
const monthArr = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

const getTime = () => {
    const date = new Date();
    /* 날짜 */
    const year = date.getFullYear();
    const month = monthArr[date.getMonth()];
    const today = String(date.getDate()).padStart(2, "0");
    const day = dayArr[date.getDay()];
    /* 시간 */
    const hours = String(date.getHours()).padStart(2, "0");
    const hoursAPM = hours > 12 ? `PM ${String(hours - 12).padStart(2, "0")}` : `AM ${hours}`;
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `<div id="hour">${hoursAPM}</div> \n ${minutes} : ${seconds}`;
    days.innerHTML = `<div id = "year">${year}</div> <div id="month">${month}</div> <div id="today">${today}</div> <div id="day">${day}</div>`;
};
getTime();
setInterval(getTime, 1000);