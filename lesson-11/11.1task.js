const checkDelay = (text, milliseconds) => {
    setTimeout(() => {
        console.log(text)
    }, milliseconds)
}

checkDelay('Hello after 2 seconds', 2000)
checkDelay('Hello after 4 seconds', 4000)
checkDelay('Hello after 1 second', 1000)