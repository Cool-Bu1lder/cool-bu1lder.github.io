function Hero({ children }) {
  return <section className="bg-black min-h-[760px]">{children}</section>
}

function AboutMe() {
  return (
    <section className="bg-neutral-900 min-h-[760px] pt-20">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="space-y-8 text-white text-xl">
          <p>
            I'm a Computer Science graduate who finds real satisfaction in
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
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Hero></Hero>
      <AboutMe />
    </>
  )
}

export default App
