import './App.css'
import Box from "./components/Box.tsx";

function App() {

    const boxes = [8, 2, 4, 6, 4, 6, 10, 8, 4, 6, 2, 2, 4]
  return (
    <div id="site-container" className="mx-auto grid grid-cols-16 gap-4 grid-flow-dense w-xl md:w-3xl lg:w-5xl xl:w-7xl">
        {boxes.map((box) => (
            <Box span={box} />
        ))}
        <div>

        </div>
      <h1 className="text-3xl lg:text-amber-600">Responsive news site, using Tailwind</h1>
    </div>
  )
}

export default App
