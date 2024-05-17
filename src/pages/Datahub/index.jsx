import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Map from './components/Map'
export default function Datahub() {
  return (
    <div className={styles.root}>
      <div className="map_content">
        <Map />
      </div>
      <div className="right_operation">operation</div>
    </div>
  )
}
