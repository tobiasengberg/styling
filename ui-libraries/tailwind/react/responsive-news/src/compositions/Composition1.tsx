
const Composition1 = () => {
    return (
        <div className="col-start-4 col-end-13 row-start-2 row-end-8 grid grid-cols-9 grid-rows-6 gap-4">
            <div className="col-start-1 col-end-5 row-start-1 row-end-2 h-10">
                <p className="text-[300px] m-0 p-0 font-bold leading-none tracking-tight text-gray-200">Drop</p>
            </div>
            <div className="col-start-2 col-end-9 row-start-5 row-end-7 h-10">
                <p className="text-3xl m-0 p-0 font-bold leading-none tracking-tight text-red-300">Framing the issue as a possibility</p>
            </div>
            <div className="col-start-5 col-end-9 row-start-3 row-end-7 h-10">
                <p className="text-6xl m-0 p-0 font-bold leading-none tracking-tight text-blue-300">all pretenses</p>
            </div>
            <div className="col-start-7 col-end-10 row-start-1 row-end-2 relative">
                <p className="absolute top-4 text-5xl font-black bg-green-300 py-12 px-1 text-white rounded-full right-0 -rotate-12">100%</p>
            </div>
        </div>
    );
};

export default Composition1;