import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class cardTemp extends Component {
    render() {
        return (
            <div style={{padding:3, margin:2,}}>
                <Card>
                    <CardContent>
                        <Typography style={{textAlign:'left', fontSize:10}}  gutterBottom>
                            {this.props.content}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
