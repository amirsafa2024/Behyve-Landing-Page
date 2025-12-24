import "./ServiceOption.css";
function ServiceOption(props) {
    return (
        <div className="serviceOptionDivision">
            <img src={props.imgSource} />
            <h3>{props.imgHeader}</h3>
            <p>{props.imgDesc}</p>
        </div>
    );
}

export default ServiceOption;
