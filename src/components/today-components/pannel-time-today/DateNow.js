import React, { Component } from "react";

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
            <li className="DateNow">
                {this.state.time}
                </li>
        )
    }
}

export default DateNow;