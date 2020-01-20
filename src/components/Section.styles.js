import { css } from "@emotion/core"
import useScreenWidth from "../hooks/useScreenWidth"

const screenWidth = useScreenWidth()

const h3Spacing = css(
  screenWidth({
    marginTop: ["2.5em", "3.5em", "3.5em", "5em"],
    marginBottom: ["1.3em", "1.3em", "1.3em", "2em"],
  })
)

const styles = css`
  h3 {
    ${h3Spacing};
    color: var(--accentColor);
  }

  li {
    margin-bottom: 2em;
  }
`

export default styles
