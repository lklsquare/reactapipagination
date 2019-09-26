import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios from "axios";
import Pagination from './pagination';
import FrequencyCounter from './frequencyCounter';




export default class Main extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            source:"dhl-parcel",
            terms:"safe",
            sentiments:"all",
            apiKey:"AU_WtVnh93Tixe_CNZqp",
            data : "",
            section:""
        }
    }
    onFocusHandler = (e)=>{
        console.log(e.target.value)
        this.setState({
            terms:e.target.value
        })
    }

    sendRequest= async()=>{
        const url = 'https://api-demo.sentisum.com/api/v1/comments/textsearch?source=dhl-parcel&terms='+this.state.terms+'&sentiment=all&apiKey=AU_WtVnh93Tixe_CNZqp'
        const response =  await axios.get(url);
        if(response.data){
            console.log(response.data)
            this.setState({
                data:response.data
            })
        }
    }

    setSection1 = ()=>{
        this.setState({
            section:1
        })
    }
    setSection2 = ()=>{
        this.setState({
            section:2
        })
    }

    render() {

        const sectionToDisplay = ()=>{
            if(this.state.section===1) return <FrequencyCounter sentences={this.state.data?this.state.data.sentences:""} word={this.state.terms}/>;
            if (this.state.section===2) return <Pagination sentences={this.state.data?this.state.data.sentences:""}/>;
            return null;
        }
        
        return (
            <div>
                <div style={styles.container}>
                    <input 
                        style={styles.input}
                        value={this.state.terms}
                        onChange={(e)=>this.onFocusHandler(e)}
                    />
                    <Button variant="contained" style={styles.button} onClick={()=>this.sendRequest()}>
                        Search
                    </Button>

                    <div style={{marginTop:20,marginBottom:20}}>
                        <Button variant="contained" style={styles.button} onClick={()=>this.setSection1()} disabled={this.state.data===""|this.state.section===1}>
                            Section 1
                        </Button>
                        <Button variant="contained" style={styles.button} onClick={()=>this.setSection2()} disabled={this.state.data===""|this.state.section===2}>
                            Section 2
                        </Button>
                    </div>

                    <div style={{marginTop:20,marginBottom:20, padding:10}}>
                        {sectionToDisplay()}
                    </div>
                </div>
                
                
            </div>
        )
    }
}


const styles = {
    container:{
        margin:10,
        padding: 20,
    },
    input:{
        width: 300,
        background: '#ababab',
        border: 'none',
        borderWidth: 'none',
        height:20,
        padding: 10,
        borderRadius:5
    },
    button:{
        marginLeft: 20,
    },
    display1:{

    }
}
