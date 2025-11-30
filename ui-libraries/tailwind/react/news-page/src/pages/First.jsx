import React from 'react';
import ArticleCard from "../components/ArticleCard.jsx";
import FormatHeadline1 from "../components/paragraphFormats/FormatHeadline1.jsx";
import Button from "../components/ui/Button.jsx";
import MainSection from "../components/ui/MainSection.jsx";
import TwoThreeContent from "../components/ui/TwoThreeContent.jsx";
import report from "../assets/report.svg";
import ArticleAbstract from "../components/ui/ArticleAbstract.jsx";
import {sideAbstracts} from "../data/sideAbstracts.js";


const First = () => {
    return (
        <div className="grid grid-cols-8">
            <div className="col-span-6 min-h-screen border-r-1 border-slate-500">
                <MainSection>
                    <TwoThreeContent>
                        <ArticleCard item={{src:"./img/computer.JPG", alt:"test", title:"En sorts minnesfunktion kopplad till plats och rörelse", description:"Alias architecto commodi culpa dicta dignissimos eos hic illo, magni minus nesciunt nihil odio officia perferendis perspiciatis placeat qui quisquam reprehenderit repudiandae rerum, sit! Fuga, laudantium nobis! Atque aut earum expedita libero natus neque odit quia sit tempora tenetur, unde!"}}/>
                        <div className=" col-span-3 p-5 py-10">
                            <h2 className="mb-20 text-slate-600 font-medium text-6xl leading-13 tracking-tight text-balance">Information environments will be important for context</h2>
                            <p className="text-2xl">Eaque, hic magnam. Ad aperiam consequuntur cumque deserunt earum eos et eveniet explicabo harum illo iure iusto laboriosam laborum natus nemo.</p>
                            <p className="text-2xl">• Cupiditate dolorum ducimus optio</p>
                            <p className="text-2xl">• Minus pariatur repellat</p>
                            <p className="text-2xl">• Allum impedit iste iure, modi necessitatibus</p>
                            <p className="text-2xl">• Consequatur earum iste officiis</p>
                        </div>
                    </TwoThreeContent>
                </MainSection>
                <MainSection>

                    <div className="px-40 py-20 text-center w-180">
                        <p className="text-bold text-xl pb-10 ">Om företagets kontinuerliga arbete med plats och digitala system</p>
                        <h3 className="text-yellow-300 font-medium text-3xl">Ladda ner rapport</h3>
                    </div>
                    <img className="w-95 absolute -top-8 left-200 z-40" src={report} alt="test"/>

                </MainSection>
                <MainSection>
                    <div className="grid grid-cols-5">
                        <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                        <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                        <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                        <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                    </div>
                </MainSection>
            </div>
            <div className="col-span-2 min-h-screen">
                <MainSection>
                    <div className="p-5 pt-10">
                        <h3 className="font-bold text-xl text-slate-800 pb-8">Artiklar</h3>
                        <div>
                            {sideAbstracts.map(item => <ArticleAbstract key={item.id} id={item.id} title={item.title} summary={item.summary}/>)}
                        </div>
                    </div>
                </MainSection>
                <MainSection>
                    <div className="p-5 pt-10">
                        <h3 className="font-bold text-xl text-slate-800">Contextualism</h3>
                        <p className="text-slate-200">Consectetur adipisicing elit</p>
                        <p className="text-slate-200">Animi cupiditate fugit illum</p>
                        <p className="text-slate-200">Quibusdam tenetur ullam voluptates!</p>
                        <p className="text-slate-200">Aspernatur beatae, commodi consequatur</p>
                        <p className="text-slate-200">Dolor earum ex fugiat, iusto modi mollitia</p>
                        <p className="text-slate-200">Aliquid atque beatae ducimus </p>
                    </div>
                </MainSection>
                <MainSection>
                    <div className="p-5 pt-10">
                        <h3 className="font-bold text-xl text-slate-800">Contextualism</h3>
                        <p className="text-slate-200">Consectetur adipisicing elit</p>
                        <p className="text-slate-200">Animi cupiditate fugit illum</p>
                        <p className="text-slate-200">Quibusdam tenetur ullam voluptates!</p>
                        <p className="text-slate-200">Aspernatur beatae, commodi consequatur</p>
                        <p className="text-slate-200">Dolor earum ex fugiat, iusto modi mollitia</p>
                        <p className="text-slate-200">Aliquid atque beatae ducimus </p>
                    </div>
                </MainSection>
                <MainSection>
                    <div className="p-5 pt-10">
                        <h3 className="font-bold text-xl text-slate-800">Contextualism</h3>
                        <p className="text-slate-200">Consectetur adipisicing elit</p>
                        <p className="text-slate-200">Animi cupiditate fugit illum</p>
                        <p className="text-slate-200">Quibusdam tenetur ullam voluptates!</p>
                        <p className="text-slate-200">Aspernatur beatae, commodi consequatur</p>
                        <p className="text-slate-200">Dolor earum ex fugiat, iusto modi mollitia</p>
                        <p className="text-slate-200">Aliquid atque beatae ducimus </p>
                    </div>
                </MainSection>
            </div>

        </div>
    );
};

export default First;