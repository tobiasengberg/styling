import React from 'react';
import report from "../../assets/report.svg";

const TopPrimary = () => {
    return (
        <div className="col-span-7">
            <div className="p-5 py-10 border-b-1 border-slate-400">
                <h2 className="mb-20 text-slate-300 font-medium text-7xl leading-18 tracking-tight text-balance">Meningsfull utveckling av informationsmiljöer</h2>
                <p className="text-2xl text-slate-300">Från ett synsätt där konkreta arbetsplatser digitaliseras, till ett synsätt där det digitala konkretiseras på en plats.</p>
                <ul className="list-disc list-inside pt-4 text-slate-300">
                    <li className="text-2xl">Platsen i företagets informationssystem</li>
                    <li className="text-2xl">Minus pariatur repellat</li>
                    <li className="text-2xl">Allum impedit iste iure, modi necessitatibus</li>
                    <li className="text-2xl">Relationell data med Neo4j</li>
                </ul>
            </div>
            <div className="px-5 py-10 relative">
                <p className="w-90 font-bold text-2xl pb-10 text-slate-700">Om företagets kontinuerliga arbete med plats och digitala system</p>
                <h3 className="text-yellow-200 font-medium text-3xl">Ladda ner rapport</h3>
            </div>
            <img className="w-85 absolute -bottom-4 left-200 z-40" src={report} alt="test"/>
        </div>
    );
};

export default TopPrimary;