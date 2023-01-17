import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";

const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />
))

export default Map