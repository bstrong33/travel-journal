function Log(props) {
    return (
        <div className="Log">
            <img src={require(`../Images/${props.image}`)} alt=""/>
            <div className="Log-info">
                <h3>{props.location}</h3>
                <a href={props.googleLink}>View in Google Maps</a>
                <h1>{props.title}</h1>
                <span>{props.dates}</span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Log;