import { css } from "@emotion/core"
import useScreenWidth from "../hooks/useScreenWidth"

const screenWidth = useScreenWidth()

const flexDirection = direction =>
  css(
    screenWidth({
      display: "flex",
      flexDirection: ["column", "column", "column", direction],
      alignItems: "baseline",
      "h4:not(:only-child)": {
        marginBottom: ["0.25em", "0.25em", "0.25em", "0"],
      },
    })
  )

const bulleted = css`
  padding-left: 2.4rem;
  li {
    list-style-type: disc;
  }
`

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.5em, 1fr));
  grid-column-gap: 2rem;
  justify-content: space-between;
`

const hyphenated = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > :nth-child(2) {
    font-weight: 200;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
`

const lineHeight = css`
  line-height: 1.4;
`

const thin = css`
  font-size: 0.75em;
  font-weight: 300;
  opacity: 0.65;
`

const styles = css`
  header {
    button {
      color: inherit;
    }

    p {
      color: var(--accentColor);
    }
  }

  #contact {
    ul {
      ${grid};

      li {
        margin-bottom: 1.2em;

        h4 {
          ${thin};
          margin-bottom: 0.5em;
        }

        p {
          font-weight: 500;
        }
      }
    }
  }

  #projects {
    div {
      ${flexDirection("row")};

      h4 {
        font-size: 1.3em;
        margin-right: 0.5em;
      }
    }

    li > ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.1em;
      margin-bottom: 0.384em;

      li {
        background-color: var(--accentColor);
        border-radius: 4px;
        color: white;
        font-size: 0.64em;
        font-weight: 400;
        letter-spacing: 0.35em;
        line-height: 1.6;
        margin-top: 0.6em;
        margin-right: 0.6em;
        margin-bottom: 0;
        padding: 0.69em;
        text-transform: uppercase;
        text-indent: 0.35em;
        white-space: nowrap;
        :last-child {
          margin-right: 0;
        }
      }
    }

    p {
      ${lineHeight};
    }
  }

  #experience {
    li {
      div:first-of-type {
        ${flexDirection("row-reverse")};
        justify-content: space-between;

        div {
          ${hyphenated};
          ${thin};
        }

        h4 {
          font-size: 1.3em;
        }
      }

      div:last-of-type {
        ${hyphenated};
        margin-bottom: 0.5em;

        h5 {
          font-size: 1.1em;
          font-weight: 500;
          opacity: 0.75;
          :first-of-type:not(:only-child) {
            font-style: italic;
          }
        }
      }

      ul {
        ${bulleted};
        ${lineHeight};
      }
    }
  }

  #strengths {
    ul {
      ${bulleted};
      ${grid};

      li {
        margin-bottom: 0.6em;
        ::after {
          content: "!";
          color: var(--accentColor);
          font-size: 1.2em;
          font-style: italic;
          padding-left: 0.2em;
        }
      }
    }
  }
`

export default styles
