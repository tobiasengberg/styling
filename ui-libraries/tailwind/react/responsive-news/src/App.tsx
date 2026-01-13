import './App.css'

function App() {

  return (
    <div id="site-container" className="mx-auto grid grid-cols-16 grid-rows-10 gap-4 grid-flow-dense w-xl md:w-3xl lg:w-5xl xl:w-7xl">
        <div className="col-start-4 col-end-8 row-start-2 row-end-3 h-10">
            <p className="text-[300px] m-0 p-0 font-bold leading-none tracking-tight text-gray-200">Drop</p>
        </div>
        <div className="col-start-5 col-end-12 row-start-6 row-end-8 h-10">
            <p className="text-3xl m-0 p-0 font-bold leading-none tracking-tight text-red-300">Framing the issue as a possibility</p>
        </div>
        <div className="col-start-8 col-end-12 row-start-4 row-end-8 h-10">
            <p className="text-6xl m-0 p-0 font-bold leading-none tracking-tight text-blue-300">all pretenses</p>
        </div>
    </div>
  )
}

export default App
