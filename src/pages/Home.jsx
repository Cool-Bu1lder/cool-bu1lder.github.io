import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Home() {
  return (
    <>
      <Container className="py-4">
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
          <Container fluid className="p5-y">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <Button variant="primary" size="lg">
              Primary
            </Button>
          </Container>
        </div>
      </Container>
    </>
  )
}

export default Home
