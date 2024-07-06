'use client'
import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import styles from '@/app/styles/map/Map.module.css';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  padding: "10.5rem"
};

function FarmerMap(data: any) {
  const locationData = data.data;

  const center = {
    lat: Number(locationData.latitude),
    lng: Number(locationData.longitude)
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={1}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          center: center
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <MarkerF position={center}></MarkerF>
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(FarmerMap)