import * as React from 'react';
import {imageArray,answerArray,questionArray} from './exportThing'
import { Link } from 'react-router-dom';

const selector=()=>{
    let numberParams=new URLSearchParams(location.search.slice(1))
    let numb=Number(numberParams.get('count'));
    console.log(numb)

    if(numb===1){
        console.log('here is 1')
        const ttb:HTMLElement|null=document.getElementById('ttb')
        ttb!.remove()
        return(
            <div id="qaa" className="qaa">
                <div className="question">
                    <img src={imageArray[numb-1]} className="qimg"/>
                    <p className="question-txt">{questionArray[numb-1]}</p>
                </div>
                <div className="answer">
                    <Link to={`/selector/gikal?count=${numb+1}`} className="selectbu">{answerArray[numb-1][0]}</Link>
                    <Link to={`/selector/gikal?count=${numb+2}`} className="selectbu">{answerArray[numb-1][0]}</Link>
                </div>
            </div>
        )
    }else{
        if(numb%2===0){
            if(numb===4||numb===6){
                return (
                    <div id="qaa" className="qaa">
                        <div className="question">
                            <img src={imageArray[numb-1]} className="qimg"/>
                            <p className="question-txt">{questionArray[numb-1]}</p>
                        </div>
                        <div className="answer">
                            <Link to={`/selector/gikal?count=${numb+3}`} className="selectbu">{answerArray[numb-1][0]}</Link>
                            <Link to={`/selector/gikal?count=${numb+4}`} className="selectbu">{answerArray[numb-1][1]}</Link>
                        </div>
                    </div>
                )
            }else if(numb===8||numb===10){
                return (
                    <div id="qaa" className="qaa">
                        <div className="question">
                            <img src={imageArray[numb-1]} className="qimg"/>
                            <p className="question-txt">{questionArray[numb-1]}</p>
                        </div>
                        <div className="answer">
                            <Link to={`/selector/gikal?count=${numb-6}`} className="selectbu">{answerArray[numb-1][0]}</Link>
                            <Link to={`/selector/gikal?count=${numb-5}`} className="selectbu">{answerArray[numb-1][1]}</Link>
                        </div>
                    </div>
                )
            }
            return (
                <div id="qaa" className="qaa">
                    <div className="question">
                        <img src={imageArray[numb-1]} className="qimg"/>
                        <p className="question-txt">{questionArray[numb-1]}</p>
                    </div>
                    <div className="answer">
                        <Link to={`/selector/gikal?count=${numb+2}`} className="selectbu">{answerArray[numb-1][0]}</Link>
                        <Link to={`/selector/gikal?count=${numb+3}`} className="selectbu">{answerArray[numb-1][1]}</Link>
                    </div>
                </div>
            )
        }else{
            if(numb===5){
                return (
                    <div id="qaa" className="qaa">
                        <div className="question">
                            <img src={imageArray[numb-1]} className="qimg"/>
                            <p className="question-txt">{questionArray[numb-1]}</p>
                        </div>
                        <div className="answer">
                            <Link to={`/selector/gikal?count=${numb+3}`} className="selectbu">{answerArray[numb-1][0]}</Link>
                            <Link to={`/selector/gikal?count=${numb+4}`} className="selectbu">{answerArray[numb-1][1]}</Link>
                        </div>
                    </div>
                )
            }
            if(numb===7||numb===9){
                return (
                    <div id="qaa" className="qaa">
                        <div className="question">
                            <img src={imageArray[numb-1]} className="qimg"/>
                            <p className="question-txt">{questionArray[numb-1]}</p>
                        </div>
                        <div className="answer">
                            <Link to={`/selector/gikal?count=${numb-6}`} className="selectbu">{answerArray[numb-1][0]}</Link>
                            <Link to={`/selector/gikal?count=${numb-5}`} className="selectbu">{answerArray[numb-1][1]}</Link>
                        </div>
                    </div>
                )
            }
            return (
                <div id="qaa" className="qaa">
                    <div className="question">
                        <img src={imageArray[numb-1]} className="qimg"/>
                        <p className="question-txt">{questionArray[numb-1]}</p>
                    </div>
                    <div className="answer">
                        <Link to={`/selector/gikal?count=${numb+2}`} className="selectbu">{answerArray[numb-1][0]}</Link>
                        <Link to={`/selector/gikal?count=${numb+3}`} className="selectbu">{answerArray[numb-1][1]}</Link>
                    </div>
                </div>
            )
        }
    }



}
console.log("======================")
export default selector;