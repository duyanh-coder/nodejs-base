console.log("Hello world!")

setTimeout(() => {
    console.log("After 3 seconds take!")
}, 3000);

var timeCount = 0

// Function Expression + Arrow Function
var timer = setInterval(() => {
    console.log(`Counting ${timeCount} second(s)`)
    timeCount++
    if (timeCount > 9) {
        clearInterval(timer)
    }
}, 1000);