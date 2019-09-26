import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class singlecounter extends Component {
    render() {
        return (
            <div style={{padding:3, margin:2,display:'flex'}}>
                <Card style={{padding:10, margin:2}}>
                    <CardContent>
                        <Typography style={{textAlign:'center', fontSize:20, width:'200px'}}  gutterBottom>
                            {this.props.count }
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{padding:3, margin:2, width:'75%'}}>
                    <CardContent>
                        <Typography style={{textAlign:'center', fontSize:10}}  gutterBottom>
                            {this.props.sentence}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
