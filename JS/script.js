//Use dom manipulation to set time and change greeting based on time. 

const timeHeading = document.getElementById("time-header");
const greetingHeading = document.getElementById("greeting-header")


setTimeGreeting();
const interval = setInterval(setTimeGreeting, 1000);

function setTimeGreeting() {
    const time = new Date();
    timeHeading.innerText = time.toLocaleTimeString("en-uk");
    const hour = time.getHours();
    if(hour >= 6 && hour < 12) {
        greetingHeading.innerText = "Good Morning";
    }
    else if(hour >= 12 && hour < 18) {
        greetingHeading.innerText = "Good Afternoon";
    }
    else if(hour >= 18 && hour < 24) {
        greetingHeading.innerText = "Good Evening";
    }
    else {
        greetingHeading.innerText = "Good Night";
    }
    console.log(hour);    
}