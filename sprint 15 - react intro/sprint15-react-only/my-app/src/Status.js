const statuses = ["Todo", "In Progress", "Completed", "Done"];

export default function Status() {
    const randomIndex = Math.floor(Math.random() * statuses.length); 
    const status = statuses[randomIndex]; 

    return (
        <span>{status}</span>
    );
}



