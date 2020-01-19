import React from "react"
import styles from "./Section.styles"

const Section = ({ children, id, label }) => (
  <section css={styles} id={id}>
    <h3>{`${label}.`}</h3>
    {children}
  </section>
)

export default Section
