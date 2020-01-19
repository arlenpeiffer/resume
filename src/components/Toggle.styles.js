import { css } from "@emotion/core"

const styles = css`
  background: none;
  border: none;
  font-size: 0.75em;
  font-weight: 200;
  margin-bottom: 1.5em;
  :hover {
    color: var(--accentColor);
  }
  :focus {
    color: var(--accentColor);
    outline: none;
  }

  span {
    color: var(--accentColor);
  }
`

export default styles
