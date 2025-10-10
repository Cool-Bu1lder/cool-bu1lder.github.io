import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import MapComponent from '../components/MapComponent'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <Container fluid className="p5-y">
          {/* Layout of Profile inspired by GitHub */}
          <div className="pb-5 d-flex align-items-center justify-content-center">
            <img
              alt=""
              src="/profile.png"
              width="64"
              height="64"
              className="rounded-circle me-3"
            />
            <h1>
              <span className="d-block fw-bold fs-1 font-monospace">
                Daniel Willoughby
              </span>
              <span className="d-block text-body-secondary fs-3 font-monospace">
                Cool-Bu1lder
              </span>
            </h1>
          </div>

          <p>LINKEDIN | GITHUB</p>

          <h2>About Me</h2>
          <p>
            I'm a Computer Science student who finds real satisfaction in
            solving challenging software problems. Over time, I've learned
            there's always a balance between building the perfect solution and
            delivering something in a reasonable timeframe — as a bit of a
            perfectionist, I know those compromises can be painful, but they're
            part of good engineering.
          </p>
          <p>
            I've worked with a range of tools through university and personal
            projects, and I especially enjoy using <strong>React</strong>,{' '}
            <strong>Lua</strong>, and <strong>Git/GitHub</strong>. I think most
            web frameworks are good — I'm just more familiar with React. I like
            Lua for its simplicity compared to other languages, and I value
            Git/GitHub for enforcing consistent, well-styled code when paired
            with linting and automation in team projects.
          </p>
          <p>
            I'm currently looking for opportunities in <strong>software</strong>
            , <strong>web</strong>, <strong>cloud</strong>, or{' '}
            <strong>game development</strong>, where I can apply what I've
            learned, keep improving as a developer, and take on projects that
            are both interesting and technically challenging.
          </p>

          <h2>Projects</h2>
          <p>Geospatial Data Browser</p>
          <p>Cube Slicer</p>

          <h2>Skills</h2>

          <h2>Features</h2>
          <ul>
            <li>map</li>
          </ul>
          <MapComponent />
        </Container>
      </div>
    </>
  )
}

export default Home
