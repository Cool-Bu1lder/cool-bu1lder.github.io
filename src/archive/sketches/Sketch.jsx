import { useRef, useEffect } from 'react'
import p5 from 'p5'

function Sketch() {
  const sketchRef = useRef()

  useEffect(() => {
    // Example Adapted from: https://github.com/P5-wrapper/react
    const s = (p) => {
      p.setup = () => {
        p.createCanvas(600, 400, p.WEBGL)
      }

      p.draw = () => {
        p.background(250)
        p.normalMaterial()
        p.push()
        p.rotateZ(p.frameCount * 0.01)
        p.rotateX(p.frameCount * 0.01)
        p.rotateY(p.frameCount * 0.01)
        p.plane(100)
        p.pop()
      }
    }

    const myP5 = new p5(s, sketchRef.current)

    return () => myP5.remove()
  }, [])

  return <div ref={sketchRef} />
}

export default Sketch
