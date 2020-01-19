import React from "react"
import { Global } from "@emotion/core"
import Resume from "../components/Resume"
import SEO from "../components/SEO"
import globalStyles from "../constants/globalStyles"

const IndexPage = () => (
  <>
    <Global styles={globalStyles} />
    <SEO title="Arlen Peiffer — Resume" />
    <Resume />
  </>
)

export default IndexPage
