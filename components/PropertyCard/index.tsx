import React from 'react'
import styles from './PropertyCard.module.css'

export default function PropertyCard() {
  return (
    <div className={styles.card}>
        <h2>New Jersy</h2>
        <h3>Piscataway</h3>
        <h4>Middlesex, country, NJ</h4>
        <button>last updated 01/21/2022</button>
        <p>Auction Ended Sep 22, 2022</p>
        <br/>
        <hr/>
    </div>
  )
}
