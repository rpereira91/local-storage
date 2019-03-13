import React, { Component } from 'react';

export default class DisplayTasks extends Component {
    render(){
        return(
            <div>
                {this.props.item.time}1
            </div>
        )
    }
}