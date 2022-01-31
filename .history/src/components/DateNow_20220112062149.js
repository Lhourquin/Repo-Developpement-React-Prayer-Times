import React, { Component } from "react";
import CountDown from "./CountDown";

class DateNow extends Component {

    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=> this.setState({time :  new Date().toLocaleTimeString()}), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <span>
                <CountDown/>
                {this.state.time}
                </span>
        )
    }
}

export default DateNow;