import React, { useEffect, useState } from "react";
import "./Quran.css";

export const Quran = ({ surat }) => {

    localStorage.setItem("Quran", JSON.stringify(surat))

    const [sourate, setSOurate] = useState(JSON.parse(localStorage.getItem("Quran") || "[]"))

    useEffect(()=> {
        setSOurate(JSON.parse(localStorage.getItem("Quran") || "[]"))
    }, [surat])

    const [indexSurat, setIndexSurat] = useState(0);
 
    const open = (index, objSourate) => {
        let number = index + 1;
        console.log(number == objSourate);
        setIndexSurat(number);
    }

    const close = () => {
        setIndexSurat(0);
    }

    useEffect(() => {
        let body = document.getElementsByTagName("body")[0];
        let nav = document.getElementsByClassName("nav-container")[0];
        if (indexSurat !== 0) {
            body.style.overflow = "hidden";
            nav.style.display = "none";
        } else {
            body.style.removeProperty("overflow");
            nav.style.display = "block";
        }

    }, [indexSurat])



    return (
        <>
            <h1 className="quran-title"><i className="fas fa-quran"></i>{" "}Saint Coran
                <br />
                <span>(Avec traduction française des sens des verset)</span></h1>

            <div
                style={indexSurat !== 0 ? { overflow: "hidden", color: "black", textAlign: "center ", postion: "fixed" } : {}}
                className="container-quran"
            >

                {
                    surat.map((obj, idx) => {

                        return <div key={obj.id} className="container-surat" >
                            <div
                                onClick={() => open(idx, obj.sourate)}
                                style={indexSurat == obj.id ? { display: "none" } : { display: "block" }}>
                                <div className="surat-number">{obj.id}</div>
                                <div className="surat-title">{obj.sourate}
                                </div>

                                {  /*  <p>{obj.arabic_text}</p>
                        <p>{obj.translation}</p>*/}
                                { /* <button onClick={() => open(idx, obj.sourate)}>Lire</button>*/}


                            </div>

                            <div style={indexSurat == obj.id ? {
                                display: "block",
                                position: "fixed",
                                backgroundColor: "white",
                                left: 0,
                                top: 0,
                                right: 0,
                                height: "100%",
                                overflow: "auto",
                                width: "100%",
                                cursor: "default",
                                color: "purple"
                            }
                                : { display: "none" }}>
                                <button className="return" onClick={() => close()}>{"<<"}</button>
                                <div className="surat-title-number"> {obj.id} {obj.sourate}</div>


                                <div className="surat-content">{obj.verset}</div>


                            </div>
                        </div>
                    })

                }
                {console.log("surat")}
                {
                    surat.map(x => console.log(x))
                }
                {console.log("sourate")}
                {console.log(sourate)
                }

            </div >
        </>

    )
}