import React from 'react'
import styles from './Details.module.css'

const Details = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.image} />
      </div>
      <div className={styles.data}>
        <ul>
          <li>Name: {data.name}</li>
          <li>Status: {data.status}</li>
          <li>Species: {data.species}</li>
          <li>Gender: {data.gender}</li>
          <li>Location: {data.location.name}, {data.location.dimension}</li>
        </ul>
      </div>
    </div>
  )
}

export default Details
