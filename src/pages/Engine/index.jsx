import React from 'react'
import styles from './index.module.scss'
import Scatter from './components/Scatter'
export default function Engine() {
  return (
    <div className={styles.root}>
      <div className="Engine_content">
        <div className="Engine_left">
          <div className="left_top"></div>
          <div className="left_down"></div>
        </div>
        <div className="Engine_right">
          <div className="right_top"></div>
          <div className="right_down">
            <Scatter />
          </div>
        </div>
      </div>
    </div>
  )
}
