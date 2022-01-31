import moment from "moment";
import React, { Component } from "react";


class CountDown extends Component {
    constructor(){
        super();
        this.state = {
            event : moment([7,0], "HH:mm"),
        }
    }

    render() {
        return (
            console.log(this.state.event)

<div></div>
        )
    }

   /* let eventTime= 1366549200; // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
let currentTime = 1366547400; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
let diffTime = eventTime - currentTime;
let duration = moment.duration(diffTime*1000, 'milliseconds');
let interval = 1000;

setInterval(function(){
  duration = moment.duration(duration - interval, 'milliseconds');
    $('.countdown').text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
}, interval);*/
}

export default CountDown;