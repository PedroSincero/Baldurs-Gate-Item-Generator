import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <Link to="scrolls">
        <h1>Pergaminhos Magicos</h1>
        <img src="" alt="" />
      </Link>
      <Link to="weapons">
        <h1>Armas</h1>
        <img src="" alt="" />
      </Link>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </>
  )
}

export default App
