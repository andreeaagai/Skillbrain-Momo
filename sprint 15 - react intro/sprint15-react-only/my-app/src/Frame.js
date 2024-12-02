import './Frame.css';
import Date from './Date';
import Status from './Status-complete';

export default function Frame() {
    return(
        <div className="frame">
            <div className="header">
                <p className="item">T-1</p>
                <div className="status">
                    <Status></Status>
                </div>
             </div>    
            <div>
                <p className="text">Create a Design System for Enum Workspace.</p>
            </div>
            <Date></Date>
        </div>
    );
}