'use client'
import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import styles from '@/app/styles/map/Map.module.css';
import { useGeolocation } from "@uidotdev/usehooks";
import { equal } from 'assert';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  padding: "10.5rem"
};

function FarmersMap(data) {
  const locationState = useGeolocation();
  const loading = locationState?.loading;
  const locationData = data.data;

  const center = {
    lat: Number(locationState.latitude),
    lng: Number(locationState.longitude)
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  const pinIcon = {
    url: '/images/logos/barn.webp',
    scaledSize: {width: 40, height: 25},

  }

  const farmersMarker = locationData.map((location, index) => <MarkerF key={`${location}-${index}`} position={location} icon={pinIcon}></MarkerF>)

  const googleMap = isLoaded && !loading && (
    <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={10}
    onLoad={onLoad}
    onUnmount={onUnmount}
    options={{
      streetViewControl: false,
      mapTypeControl: false
    }}
  >
    { /* Child components, such as markers, info windows, etc. */ }
    <MarkerF position={center}></MarkerF>
    {farmersMarker}
    <></>
  </GoogleMap>
  )

  return googleMap
}

export default React.memo(FarmersMap)