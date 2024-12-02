const statuses = ["Todo", "In Progress", "Completed", "Done"];
const items = document.querySelectorAll('.status');

export default function getRandomStatus() {
    const randomIndex = Math.floor(Math.random() * statuses.length); 
    return statuses[randomIndex]; 
}


items.forEach(item => {
    const status = getRandomStatus(); 
    item.textContent += `${status}`; 
    item.classList.add(`status ${status.toLowerCase()}`); 
});

