import Badge from './Badge';
import './Frame.css';
import Date from './Date';


export default function Frame(props) {
    return (
        <div className="frame">
            <div className="card-header">
                <p className="task-id">{props.id}</p>
                <Badge label={props.status} />
             </div>    
             <div className="card-content">
                <p>{props.name}</p>
            </div>
            <div className="card-footer">
                <Date date={props.dueDate} />
            </div>
        </div>
    );
}