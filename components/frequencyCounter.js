import React, { Component } from 'react';
import SingleCounter from './singlecounter';

export default class frequencyCounter extends Component {

    constructor(props){
        super(props);
        this.state = {
            counts:[]
        }
    }

    render() {
        if(this.props.sentences){
            const sentences = Object.keys(this.props.sentences);
            const term = this.props.word;
            let counts = sentences.map((sentence)=>{
                let count = (sentence.split(term)).length-1;

                const obj = {
                    count:count,
                    sentence:sentence
                }
                return(obj);
            });

            if(counts.length<50){
                counts = counts.sort((a,b)=>(a.count-b.count)).reverse();
            }else{
                counts = counts.sort((a,b)=>(a.count-b.count)).reverse().slice(0,49);
            }

            const displayCounts = counts.map((item,index)=>(<SingleCounter count={item.count|'0'} key={index} sentence={item.sentence}/>));

            // <SingleCounter count={(sentence.split(term)).length-1} sentence={sentence}/>
            
            return (
                <div style={{margin:20}}>
                    <div>
                        <p>Section 1, is the number of count of the searched word in every sentence, displaying top 50 of the sentences with respect to the frequency of the searched word</p>
                    </div>
                    <SingleCounter count={"count"} sentence={"The sentence"}/>
                    {displayCounts}
                </div>
            )

        }else{
            return null;
        }
        
    }
}
