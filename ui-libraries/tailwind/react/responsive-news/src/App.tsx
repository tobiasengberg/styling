import './App.css'
import Composition1 from "./compositions/Composition1.tsx";
import Composition2 from "./compositions/Composition2.tsx";

function App() {

  return (
    <div id="site-container" className="mx-auto grid grid-cols-16 grid-rows-10 gap-4 grid-flow-dense w-xl md:w-3xl lg:w-5xl xl:w-7xl">
        <Composition1 />
        <Composition2 />
    </div>
  )
}

export default App
