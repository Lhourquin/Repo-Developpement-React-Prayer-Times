import React from "react";
import { Component } from "react/cjs/react.production.min";

class CountDown extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    let eventTime= 1366549200; // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
let currentTime = 1366547400; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
let diffTime = eventTime - currentTime;
let duration = moment.duration(diffTime*1000, 'milliseconds');
let interval = 1000;

setInterval(function(){
  duration = moment.duration(duration - interval, 'milliseconds');
    $('.countdown').text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
}, interval);
}