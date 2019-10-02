import React, { useState } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const GoogleMap = props => {
  //Hides or the shows the infoWindow
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  //Shows the active marker upon click
  const [activeMarker, setActiveMarker] = useState({});

  //Shows the infoWindow to the selected place upon a marker
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onClose = () => {
    if (showingInfoWindow) {
      setActiveMarker(null);
      setShowingInfoWindow(false);
    }
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      stlye={styles}
      initialCenter={{
        lat: props.latitude,
        lng: props.longitude
      }}
    >
      <Marker onClick={onMarkerClick} name={props.name} />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
};

const styles = {
  width: "90%",
  height: "90%"
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDszS9vH_VpB6mumst6qwxOXfOAIqpcXpg"
})(GoogleMap);
