import React, { Component } from "react";

class DateNow extends Component {

    constructor(){
        super();
        this.state = {
            time: Date.now()
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=> this.setState({time : Date.now()}), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
}

export default DateNow;