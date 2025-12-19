document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully [cite: 45]");

    // Dynamic Greeting based on current time
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        const hour = new Date().getHours();
        if (hour < 12) greetingElement.innerText = "Good Morning, I'm Tunar";
        else if (hour < 18) greetingElement.innerText = "Good Afternoon, I'm Tunar";
        else greetingElement.innerText = "Good Evening, I'm Tunar";
    }
});