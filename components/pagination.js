import React, { Component } from 'react';
import CardContent from './cardTemp';

import Button from '@material-ui/core/Button';

export default class pagination extends Component {
    constructor(props){
        super(props)
        this.state={
            page:1
        }
    }
    decrementPage=(e)=>{
            console.log("increment page");
            if(this.state.page>1){
                this.setState(state=>({
                    page: state.page-1
                }))
            }
            console.log(this.state.page)
    }

    incrementPage=(e)=>{
            console.log("decrement page");
            if(this.state.page<32){
                this.setState(state=>({
                    page: state.page+1
                }))
            }
            console.log(this.state.page)
    }

    render() {
        if(this.props.sentences!==""){
            const sentences = Object.keys(this.props.sentences);
            const pages = sentences.length/30+1;
            const sentencesToDisplay = sentences.map((sent,index)=>{
                if(index>=(30*(this.state.page-1))&&index<(30*(this.state.page-1)+30)){
                    return <CardContent key={index} content={sent}/>;
                }
                return null;
            })
            return (
                <div style={{margin:20}}>
                    <div>
                        <p>Section 2, consists of the all sentences recieved, paginated into 30 sentences per page. </p>
                    </div>
                    {
                        sentencesToDisplay
                    }

                <div >
                    <Button variant="contained" style={{marginRight:10}} value="prev"  onClick={(e)=>this.decrementPage(e)} disabled={this.state.page===1?true:false}>
                            Prev
                    </Button>
                    <Button variant="contained" value="next"  onClick={(e)=>this.incrementPage(e)} disabled={pages-(this.state.page)<1?true:false}>
                            Next
                    </Button>
                </div>
                </div>
            );
        }
        return null;
        
    }
}
