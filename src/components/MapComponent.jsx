// https://mxd.codes/articles/how-to-create-a-web-map-with-open-layers-and-react

import React, { useEffect, useRef } from 'react'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'

function MapComponent() {
  const mapRef = useRef()

  useEffect(() => {
    const osmLayer = new TileLayer({
      preload: Infinity,
      source: new OSM(),
    })

    const map = new Map({
      target: mapRef.current,
      layers: [osmLayer],
      view: new View({
        center: [0, 0],
        zoom: 0,
      }),
    })
    return () => map.setTarget(undefined)
  }, [])

  return (
    <div
      style={{ height: '500px', width: '100%' }}
      ref={mapRef}
      className="map-container"
    />
  )
}

export default MapComponent
