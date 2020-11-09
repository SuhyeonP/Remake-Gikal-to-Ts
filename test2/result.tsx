import * as React from "react";
import {name,resultImg,resultText}from './exportThing'


const result=()=>{
    let numberParams=new URLSearchParams(location.search.slice(1))
    let numb=Number(numberParams.get('count'))-1;
    return(
        <div className="result-p">
            <div className="result-imgs">
                <img src={resultImg[numb]} className="result-img"/>
            </div>
            <div className="result-txt">
                <h2 className="result-title">당신은 <span className="result-breath">{name[numb][0]}</span> 의호흡과 잘 맞는군요.</h2>
                <p className="whois">{name[numb][1]}</p>
                <p className="char-exp">{resultText[numb]}</p>
            </div>
        </div>
    )
}
export default result;
