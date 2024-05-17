import React from 'react'
import styles from './index.module.scss'
export default function Learn() {
  return (
    <div className={styles.root}>
      <iframe
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        src="http://course.bayestat.com/rinla/index.html"
        frameBorder="0"
      ></iframe>
    </div>
  )
}
