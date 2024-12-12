import "./Badge.css";

export default function Badge(props) {
    return (
        <div className="badge">
            <p>{props.label}</p>
        </div>
    );
}