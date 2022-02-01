import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Today.css";
import { TodayTimesList } from "./today-time-list/TodayTimesList";
import { Pannel } from "./pannel-time-today/Pannel";

export const Today = ({ city, country }) => {
  const [today, setToday] = useState([]);
  const [inputCity, setInputCity] = useState("");

  setTimeout(() => {
    setInputCity(city);

  }, 1000)
  

  useEffect(() => {
    let timer = null;
    if (city || country) {
      let params = new URLSearchParams();
      params.append("country", country);
      params.append("city", city);
      params.append("method", 2);

      let request = {
        params: params,
      };
      timer = setTimeout(async () => {
        const { data } = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity`,
          request
        );
        setToday([data]);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [city, country]);

  return (
    <div className="Today__div--container-list-pannel">
      <TodayTimesList today={today} />
      <Pannel today={today} searchField={inputCity} />
      {/* <TodayTimesList today={this.state.today} />
      <Pannel today={this.state.today} searchField={this.props.city} />*/}
      {/*console.log(today)*/}
      {/*console.log('Today :' + city + ' ' + country)*/}
      {/* <TodayTimesList today={today} />
        <Pannel today={today} searchField={city} />*/}
    </div>
  );
};
/*
class Today extends Component {
  constructor() {
    super();
    this.state = {
      today: []
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const searchInputValue = {
      city : `country=${this.props.city}`,
      country : `&method=2&city=${this.props.country}`
    }

    axios.post(`https://api.aladhan.com/v1/timingsByCity`, { searchInputValue })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
*/
/*
  componentDidMount() {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity?country=${this.props.country}&method=2&city=${this.props.city}`
    )
      .then((Response) => Response.json())
      .then((result) => this.setState({ today: [result] }));
  }

  render() {
    {console.log(this.props.city)} 
    {console.log(this.props.country)} 
    {console.log(this.state.today)}

    return (
      <div className="Today__div--container-list-pannel">
        <TodayTimesList today={this.state.today} />
        <Pannel today={this.state.today} searchField={this.props.city} />
      
      </div>
    );
  }
}
*/
//export default Today;
