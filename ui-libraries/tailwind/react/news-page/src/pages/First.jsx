import React from 'react';
import ArticleCard from "../components/ArticleCard.jsx";
import MainSection from "../components/ui/MainSection.jsx";
import TwoThreeContent from "../components/ui/TwoThreeContent.jsx";
import ArticleAbstract from "../components/ui/ArticleAbstract.jsx";
import {sideAbstracts} from "../data/sideAbstracts.js";
import TopSecondary from "../components/areas/TopSecondary.jsx";
import TopPrimary from "../components/areas/TopPrimary.jsx";


const First = () => {
    return (
        <div className="grid grid-cols-16">
            <div className="col-span-12 min-h-screen border-r-1 border-slate-400">
                <MainSection>
                    <TwoThreeContent>
                        <TopSecondary item={{src:"./img/schema2.png", alt:"test", title:"En sorts minnesfunktion kopplad till plats och rörelse", description:"Alias architecto commodi culpa dicta dignissimos eos hic illo, magni minus nesciunt nihil odio officia perferendis perspiciatis placeat qui quisquam reprehenderit repudiandae rerum, sit! Fuga, laudantium nobis! Atque aut earum expedita libero natus neque odit quia sit tempora tenetur, unde!"}}/>
                        <TopPrimary />
                    </TwoThreeContent>
                </MainSection>
                <MainSection>



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
            <div className="col-span-4 min-h-screen">
                <MainSection>
                    <div className="p-5 pt-90">
                        <h3 className="font-bold text-xl text-slate-800 pb-8">Läs mer</h3>
                        <div>
                            {sideAbstracts.map(item => <ArticleAbstract key={item.id} id={item.id} title={item.title} summary={item.summary}/>)}
                        </div>
                    </div>
                </MainSection>
                <MainSection>
                    <div className="p-5 pt-10">
                        <h3 className="font-bold text-xl text-slate-800">Contextualism</h3>
                        <p className="text-white">Consectetur adipisicing elit</p>
                        <p className="text-white">Animi cupiditate fugit illum</p>
                        <p className="text-white">Quibusdam tenetur ullam voluptates!</p>
                        <p className="text-white">Aspernatur beatae, commodi consequatur</p>
                        <p className="text-white">Dolor earum ex fugiat, iusto modi mollitia</p>
                        <p className="text-white">Aliquid atque beatae ducimus </p>
                    </div>
                </MainSection>
                <MainSection>
                    <div className="p-5 pt-10">
                        <h3 className="font-bold text-xl text-slate-800">Contextualism</h3>
                        <p className="text-white">Consectetur adipisicing elit</p>
                        <p className="text-white">Animi cupiditate fugit illum</p>
                        <p className="text-white">Quibusdam tenetur ullam voluptates!</p>
                        <p className="text-white">Aspernatur beatae, commodi consequatur</p>
                        <p className="text-white">Dolor earum ex fugiat, iusto modi mollitia</p>
                        <p className="text-white">Aliquid atque beatae ducimus </p>
                    </div>
                </MainSection>
                <MainSection>
                    <div className="p-5 pt-10">
                        <h3 className="font-bold text-xl text-slate-800">Contextualism</h3>
                        <p className="text-white">Consectetur adipisicing elit</p>
                        <p className="text-white">Animi cupiditate fugit illum</p>
                        <p className="text-white">Quibusdam tenetur ullam voluptates!</p>
                        <p className="text-white">Aspernatur beatae, commodi consequatur</p>
                        <p className="text-white">Dolor earum ex fugiat, iusto modi mollitia</p>
                        <p className="text-white">Aliquid atque beatae ducimus </p>
                    </div>
                </MainSection>
            </div>
        </div>
    );
};

export default First;