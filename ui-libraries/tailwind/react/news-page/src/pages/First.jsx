import React from 'react';
import FormatHeadline1 from "../components/FormatHeadline1.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import Button from "../components/Button.jsx";

const First = () => {
    return (
        <div >
            <div className="grid grid-cols-7 gap-4">
                <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
                <ArticleCard item={{src:"./img/pic1.jpg", alt:"test", title:"test", description:"this is a text"}}/>
            </div>
            <FormatHeadline1>First</FormatHeadline1>
            <Button>Apply</Button>
        </div>
    );
};

export default First;