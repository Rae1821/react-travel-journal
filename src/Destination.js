
export default function Destination(props) {
    console.log(props)
    return (
        <div className="locations">
            <img className="location-img" alt="" src={props.place.imageUrl} />
            <div className="location-info">
                <i className="fa-solid fa-location-dot"></i>
                <p className="location-country">{props.place.location}</p>
                <a className="map-link" href={props.place.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2 className="location-title">{props.place.title}</h2>
            <p className="date">{props.place.startDate} - {props.place.endDate}</p>
            <p className="location-description">{props.place.description}</p>
        </div>
    )
}