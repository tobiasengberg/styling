import React from 'react';
import ArticleCard from "../components/ArticleCard.jsx";
import FormatHeadline1 from "../components/paragraphFormats/FormatHeadline1.jsx";
import Button from "../components/ui/Button.jsx";
import MainSection from "../components/ui/MainSection.jsx";

const First = () => {
    return (
        <div className="grid grid-cols-8">
            <div className="col-span-6 min-h-screen border-r-1 border-slate-500">
                <MainSection>
                    <div className="grid grid-cols-5">
                        <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                        <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                        <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                        <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                        </div>
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
                <FormatHeadline1>First</FormatHeadline1>
                <Button>Apply</Button>
            </div>

        </div>
    );
};

export default First;