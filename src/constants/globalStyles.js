import { css } from "@emotion/core"
import useScreenWidth from "../hooks/useScreenWidth"
import colors from "../constants/colors"

const screenWidth = useScreenWidth()

const fontSize = css(
  screenWidth({
    fontSize: ["1.3em", "1.4em", "1.6em", "1.8em", "2.2em", "2.4em", "2.8em"],
  })
)

const h1Size = css(
  screenWidth({
    fontSize: ["2em", "2.488em", "4.2em", "6.4em"],
  })
)

const h2Size = css(
  screenWidth({
    fontSize: ["1.5em", "1.86em", "1.96em", "2.98em"],
  })
)

const h3Size = css(
  screenWidth({
    fontSize: ["1.1em"],
  })
)

const pageMargin = css(
  screenWidth({
    padding: ["1rem", "2rem", "5vw"],
  })
)

const globalStyles = css`
  @import url("https://rsms.me/inter/inter.css");

  html {
    font-family: "Inter", sans-serif;
    font-size: 62.5%;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: "Inter var", sans-serif;
    }
  }

  body {
    ${fontSize}
    * {
      margin: 0;
      padding: 0;
    }
  }

  body.dark {
    background-color: ${colors.dark.background};
    color: ${colors.dark.text};
    --accentColor: ${colors.dark.accent};
  }

  body.light {
    background-color: ${colors.light.background};
    color: ${colors.light.text};
    --accentColor: ${colors.light.accent};
  }

  a {
    color: inherit;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-decoration: none;
    :hover {
      color: var(--accentColor);
    }
    :focus {
      color: var(--accentColor);
      outline: none;
    }
  }

  h1 {
    ${h1Size}
    font-weight: 900;
    letter-spacing: -0.01em;
    line-height: 0.9;
    margin-bottom: 0.6rem;
  }

  h2 {
    ${h2Size}
    font-weight: 800;
    letter-spacing: -0.01em;
    line-height: 0.9;
    margin-bottom: 0.6rem;
  }

  h3 {
    ${h3Size}
    letter-spacing: -0.03em;
  }

  li {
    list-style: none;
  }

  #___gatsby {
    ${pageMargin}
  }
`

export default globalStyles
