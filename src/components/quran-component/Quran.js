import React, { useEffect, useState } from "react";



export const Quran = () => {


    const [surat, setSurat] = useState([]);
    const [quran, setQuran] = useState([]);

    const getQuran = (number) => {
        let arr = [];
        for (let i = 1; i < number; i++) {

            fetch(`https://quranenc.com/api/translation/sura/french_hameedullah/${i}`)
                .then(response => response.json())
                .then((result) => {

                    arr.push(result.result);

                    setQuran(arr);
                })
        }
    }

    useEffect(() => {
        getQuran(115)
    }, [])

    useEffect(() => {
        let arrayOfSurat = [];
        setTimeout(() => {
            for (let i = 0; i < quran.length; i++) {
                // console.log(quran[i][0].sura)
                // console.log(quran[i].map(x => x.translation))
                arrayOfSurat.push({
                    id: Number(quran[i][0].sura),
                    sourate: quran[i][0].sura,
                    verset: quran[i].map(x => <p>{x.aya} <br />
                        {x.arabic_text}
                        <br />
                        {x.translation}</p>)
                })

            }
            //  console.log(arrayOfSurat)
            arrayOfSurat.sort((a, b) => a.id - b.id)
            setSurat(arrayOfSurat)

        }, 1000)

    }, [quran])

    console.log(quran)
    console.log(surat)

    const [indexSurat, setIndexSurat] = useState("");

    const open = (index, objSourate) => {
        let number = index + 1;
        console.log(number == objSourate);
        setIndexSurat(number);
    }

    const close = () => {
        setIndexSurat(0);
    }

    return (
        <div
            style={indexSurat !== 0 ? {  overflow: "hidden", color: "black", textAlign: "center ", postion: "fixed"} : { color: "black", textAlign: "center ", display: "block" }}

        >

            {
                surat.map((obj, idx) => {
                    return <div key={obj.id} >
                        <div style={indexSurat == obj.sourate ? { display: "none" } : { display: "block" }}>
                            <h2>{obj.sourate}</h2>
                            {  /*  <p>{obj.arabic_text}</p>
                        <p>{obj.translation}</p>*/}
                            <button onClick={() => open(idx, obj.sourate)}>Lire</button>


                        </div>

                        <div style={indexSurat == obj.sourate ? {
                            display: "block",
                            position: "fixed",
                            backgroundColor: "white",
                            top: 0,
                            height: "100vh",
                            overflow: "auto"
                        }
                            : { display: "none" }}>
                            <button onClick={() => close()}>X</button>
                            <div>{obj.verset}</div>


                        </div>
                    </div>
                })

            }


        </div >
    )
}