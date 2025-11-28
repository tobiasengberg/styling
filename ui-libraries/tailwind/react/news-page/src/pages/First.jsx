import React from 'react';
import ArticleCard from "../components/ArticleCard.jsx";
import FormatHeadline1 from "../components/paragraphFormats/FormatHeadline1.jsx";
import Button from "../components/ui/Button.jsx";
import MainSection from "../components/ui/MainSection.jsx";
import TwoThreeContent from "../components/ui/TwoThreeContent.jsx";
import report from "../assets/report.svg";

const First = () => {
    return (
        <div className="grid grid-cols-8">
            <div className="col-span-6 min-h-screen border-r-1 border-slate-500">
                <MainSection>
                    <TwoThreeContent>
                        <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                        <div className=" col-span-3 p-3 pt-10">
                            <h2 className="mb-10 text-white font-light text-5xl leading-11 tracking-tight text-balance">Information environments will be important for context</h2>
                            <p className="text-lg">Eaque, hic magnam. Ad aperiam consequuntur cumque deserunt earum eos et eveniet explicabo harum illo iure iusto laboriosam laborum natus nemo, non praesentium quisquam quod ratione reiciendis reprehenderit sapiente tempore ullam! Accusantium ad alias blanditiis corporis dolore, dolores doloribus excepturi hic laborum maiores natus, praesentium quod recusandae sit veniam vero voluptates. Ab, blanditiis commodi consectetur culpa ex facere, illo modi mollitia, provident quisquam sunt suscipit veniam. Accusamus aperiam consequuntur cumque est eveniet exercitationem fuga fugiat fugit, hic ipsam laboriosam minus mollitia nihil non odit placeat, quasi qui reiciendis rem sequi similique sint soluta ut veniam veritatis? Aliquid cum, doloremque illo magnam molestias nisi odit ratione similique sint voluptates.</p>
                        </div>
                    </TwoThreeContent>
                </MainSection>
                <MainSection>
                    <h3 className="text-yellow-300 font-light-bold text-3xl px-40 py-30">Ladda ner rapport</h3>
                    <img className="w-95 absolute -top-8 left-140 z-40" src={report} alt="test"/>
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
                    <div className="p-3 pt-10">
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
                    <div className="p-3 pt-10">
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
                    <div className="p-3 pt-10">
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
                    <div className="p-3 pt-10">
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