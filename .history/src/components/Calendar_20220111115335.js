import React, { Component } from "react";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      calandars: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://api.aladhan.com/v1/calendarByCity?country=France&method=2&city=Tourcoing`
    )
      .then((Response) => Response.json())
      .then((obj) => obj.data)
      .then((result) => this.setState({ calandars: result }));
  }

  /*
    fetch("https://api.aladhan.com/v1/calendarByCity?country=France&method=2&city=tourcoing")
      .then((response) => response.json())
      .then((objData) => objData.data)
      .then(result => console.log(result))
      .then((dataArray)=>
        console.log('data : ' + dataArray)
      )
      
      .then((dataArray) => {
        dataArray.map((data) => {
          return {
            date: {
              gregorian: data.date.gregorian.date,
              hijri: data.date.hijri.date,
            },
            salat: {
              fajr: data.timingss.Fajr,
              shourouk: data.timingss.Sunrise,
              dhor: data.timingss.Dhuhr,
              asr: data.timingss.Asr,
              maghreb: data.timingss.Maghrib,
              icha: data.timingss.Isha,
              midnight: data.timingss.Midnight,
            },
          };
        });
      })
      .then(result => this.setState( {calandars : result}));
      */
  //.then(calandar => {this.setState({calendars : calandar})})

  render() {
    return (
      <div className="Calendar">
        <h1>Ok</h1>
        {
          //    this.state.monsters.map((monster, index )=> <h3 key={index}>{monster.name}</h3>)
          //console.log(this.state.calandars)
          this.state.calandars.map((idx, obj) => (
            <div>
              <h3 key="idx">Date du jour : {obj.date.gregorian.date}</h3>
              <h3 key="idx">Fajr : {obj.timings.Fajr}</h3>
              <h3 key="idx">Shourouk : {obj.timings.Sunrise}</h3>
              <h3 key="idx">Dhur : {obj.timings.Dhuhr}</h3>
              <h3 key="idx">Asr : {obj.timings.Asr}</h3>
              <h3 key="idx">Maghrib : {obj.timings.Maghrib}</h3>
              <h3 key="idx">Isha : {obj.timings.Isha}</h3>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Calendar;
