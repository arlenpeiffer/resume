import React from "react"
import Section from "./Section"
import Toggle from "./Toggle"
import resume from "../content/resume"
import styles from "./Resume.styles"

const Resume = () => (
  <div css={styles}>
    <header>
      <Toggle />
      <h1>Arlen Peiffer</h1>
      <h2>Front End Developer</h2>
    </header>

    <Section id="contact" label="Contact Info">
      <ul>
        {resume.contactInfo.map(({ href, info, label }) => (
          <li key={label}>
            <h4>{label}</h4>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {info}
              </a>
            ) : (
              <p>{info}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>

    <Section id="projects" label="Projects">
      <ul>
        {resume.projects.map(({ name, summary, technologies, url }) => (
          <li key={name}>
            <div>
              <h4>{name}</h4>
              {url && (
                <a
                  href={`https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url}
                </a>
              )}
            </div>
            <ul>
              {technologies.map(technology => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <p>{summary}</p>
          </li>
        ))}
      </ul>
    </Section>

    <Section id="experience" label="Experience">
      <ul>
        {resume.experience.map(
          ({ employer, end, highlights, location, start, title }) => (
            <li key={title}>
              <div>
                <div>
                  <p>{start}</p>
                  <p>⟶</p>
                  <p>{end}</p>
                </div>
                <h4>{title}</h4>
              </div>
              <div>
                {employer && (
                  <>
                    <h5>{employer}</h5>
                    <h5>—</h5>
                  </>
                )}
                <h5>{location}</h5>
              </div>
              <ul>
                {highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </Section>

    <Section id="strengths" label="Strengths">
      <ul>
        {resume.strengths.map(strength => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
    </Section>

    <Section id="references" label="References available upon request" />
  </div>
)

export default Resume
