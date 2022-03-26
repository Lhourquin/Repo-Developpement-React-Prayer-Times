import React, { useState, useEffect } from "react";
import "./Masjid.css";

export const Masjid = ({ city, dataMasjid }) => {

    /*const [dataMasjid, setDataMasjid] = useState("")
    async function loadCitys() {
        const res = await fetch("http://localhost:8000/mosques");
        const mosques = await res.json();
        setDataMasjid(mosques)
        // const container = document.querySelector(".container");
        //   const card = newElements("div", { class: "card" });
        //container.appendChild(card);

        // console.log(mosques);
    }

    useEffect(() => {

        if (dataSend === "Succes") {
            loadCitys();
        
        }

    }, [dataSend])*/

    console.log([...dataMasjid].map((x) => x))
    // console.log(dataSend)
    return (
        <div
            style={
                { color: "black", textAlign: "center" }
            }
        >
            <h2>{city}</h2>
            {
                [...dataMasjid].map((obj) => {
                    return <div
                        className="Masjid-component"
                        key={obj.uuid}>
                        <h3
                            className="mosque_name"
                            key={obj.uuid}>{obj.label}</h3>
                        <img
                            className="mosque_img"

                            src={obj.image} />
                        <h4
                            className="mosque_adress"
                        ><i className="fas fa-map-marker-alt localisation-marker"></i> {obj.localisation} </h4>
                        <h5 className="mosque_jumua">Jumua - {obj.jumua === null ? "Pas d'info" : obj.jumua}</h5>
                        <ul
                            className="mosque_times_list"
                        >
                            <li><strong>Fajr</strong> {obj.times[0]}
                                <br />
                                {obj.iqama[0]}</li>
                            <li><strong>Shourouq</strong> {obj.times[1]}</li>
                            <li><strong>Dhohr</strong> {obj.times[2]}
                                <br />
                                {obj.iqama[1]}</li>
                            <li><strong>Asr</strong> {obj.times[3]}
                                <br />
                                {obj.iqama[2]}</li>
                            <li><strong>Maghreb</strong> {obj.times[4]}
                                <br />
                                {obj.iqama[3]}</li>
                            <li><strong>Icha</strong> {obj.times[5]}
                                <br />
                                {obj.iqama[4]}</li>
                        </ul>
                        <ul className="mosque_disposition"
                        >
                            <li><i className="fa-solid fa-square-parking parking"></i>
                            <br/>
                            {obj.parking ? <i className="fa-solid fa-check yes"></i> : <i className="fa-solid fa-xmark no"></i>}</li>
                            <li><i className="fa-solid fa-person-dress women"></i>
                             <br/>
                             {obj.womenSpace ? <i className="fa-solid fa-check yes"></i> : <i className="fa-solid fa-xmark no"></i>}</li>
                            <li>  
                                 <i className="fa-solid fa-hand-holding-droplet ablution"></i>
                                 <br/>
                                 {obj.ablutions ? <i className="fa-solid fa-check yes"></i> : <i className="fa-solid fa-xmark no"></i>}
                            </li>
                            <li><i className="fa-solid fa-wheelchair-move handicap"></i> 
                            <br/>
                            {obj.handicapAccesibility ? <i className="fa-solid fa-check yes"></i> : <i className="fa-solid fa-xmark no"></i>}</li>

                        </ul>

                        <p className="source-of-data">Source : <a className="source-of-data" href="https://mawaqit.net/fr/">mawaqit.net</a></p>
                    </div>
                })
            }
        </div>
    )
}