import React, { useState, useEffect } from "react";

export const Masjid = ({ city, country }) => {

    const [dataMasjid, setDataMasjid] = useState("")
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
        let timer = setTimeout(() => {
            loadCitys();

        }, 1000);

        return () => clearTimeout(timer);
    }, [city])

    console.log([...dataMasjid].map((x) => x))
    return (
        <div
            style={
                { color: "black", textAlign : "center" }
            }
        >
            <h2>{city}</h2>
            {
                [...dataMasjid].map((obj) => {
                    return <div key={obj.uuid}>
                        <h3 key={obj.uuid}>{obj.label}</h3>
                        <img
                        style={
                            {width : "50%", height : "50%"}
                        }
                        src={obj.image}/>
                        <h4>{obj.localisation}</h4>
                        <h5>Jumua - {obj.jumua}</h5>
                        <ul>
                            <li>Fajr {obj.times[0]}</li>
                            <li>Shourouq {obj.times[1]}</li>
                            <li>Dhohr {obj.times[2]}</li>
                            <li>Asr {obj.times[3]}</li>
                            <li>Maghreb {obj.times[4]}</li>
                            <li>Icha {obj.times[5]}</li>
                        </ul>
                        <ul>
                            <li>Parking :{obj.parking ? "Oui" : "Non" }</li>
                            <li>Salle pour femme : {obj.womenSpace ? "Oui" : "Non"}</li>
                            <li>Salle d'ablution : {obj.ablutions ? "Oui" : "Non"}</li>
                            <li>Accés handicapées : {obj.handicapAccesibility ? "Oui" : "Non"}</li>

                        </ul>


                    </div>
                })
            }
            <button>Click</button>
        </div>
    )
}