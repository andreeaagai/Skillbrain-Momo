import './Date.css';


const date = new Date('2021-01-24');

const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export default function DateComponent() {
    return (
        <div className="date">
            <p className="due-date">Due Date</p>
            <div className="mt-20 format-date">
                {formatDate(date)}
            </div>
        </div>
    );
}
