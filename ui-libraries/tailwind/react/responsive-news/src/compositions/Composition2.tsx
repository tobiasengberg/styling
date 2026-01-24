
const Composition2 = () => {
    return (
        <div className="col-start-4 col-end-12 row-start-8 row-end-13 grid grid-cols-8 grid-rows-6 relative">
            <div className="bg-slate-200 w-full h-full row-span-7 col-span-2">
                <p className="text-5xl font-bold text-center text-slate-100 absolute top-20 left-10">ResponseFormat</p>
            </div>
            <div className="bg-slate-300 w-full h-full row-span-7 col-span-2">
                <p className="text-5xl font-bold text-center text-slate-200 absolute top-10 left-50">ResponseFormat</p>
            </div>
            <div className="bg-slate-400 w-full h-full row-span-7 col-span-2">
                <p className="text-5xl font-bold text-center text-slate-300 absolute top-0 left-80">Response<br/>Format</p>
            </div>
            <div className="bg-slate-500 w-full h-full row-span-7 col-span-2">
                <p className="text-5xl font-bold text-center text-slate-400 absolute top-0 left-130">Resp<br/>onse<br/>For<br/>mat</p>
            </div>
        </div>
    );
};

export default Composition2;