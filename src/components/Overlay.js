export default function Overlay() {
  return (
    <>
      <h2>ANDERSON MANCINI.DEV</h2>

      <button
        className="ctaButton contact"
        onClick={() => {
          window.open('https://andersonmancini.dev', 'tab')
        }}>
        GET IN TOUCH
      </button>

      <div className="container">
        <h1>CONFETTI V2</h1>
        <p>Adds performant confetti explosions to your for React Three Fiber projects using instanced meshes with many customization options. </p>
        <button onClick={() => window.open('https://github.com/ektogamat/r3f-confetti-component-v2', 'tab')} >Download it now</button>
        <small>
          Creeated by Anderson Mancini. Model Credits: <a href="https://sketchfab.com/3d-models/clown-in-car-94b08bdb9fb84d09908680790e9645fa" target="_blank">Clown in a car</a>
        </small>
      </div>
    </>
  )
}
