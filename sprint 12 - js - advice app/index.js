const adviceIdElement = document.getElementById("adviceId");
const adviceTextElement = document.getElementById("adviceText");
const diceButton = document.getElementById("button");


const functionWhenDOMLoaded = () => {
    const el =  document.getElementById("button");
    el.onclick = () => fetchAdvice();
}

async function fetchAdvice() {
    const apiResponse = "https://api.adviceslip.com/advice";
    let adviceText = "";
    let adviceId = "";
    try {
        const response = await fetch(apiResponse);
        const adviceData = await response.json();

        adviceText = `${adviceData.slip.advice}`;
        adviceId = adviceData.slip.id;
    } 
    catch (error) {
        console.error(error);
    }
    document.getElementById("adviceId").textContent = `Advice #${adviceId}`;
    document.getElementById("adviceText").textContent = `"${adviceText}"`;
}

document.addEventListener("DOMContentLoaded", functionWhenDOMLoaded);