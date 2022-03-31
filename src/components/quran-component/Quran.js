import React, { useEffect, useState } from "react";



export const Quran = () => {
    //const [quran, setQuran] = useState([]);

    /*
        const [surat, setSurat] = useState([]);
    
        useEffect(() => {
            for (let i = 0; i < 114; i++) {
                console.log("before fetch " + i)
                console.log(surat);
                    fetch(`https://quranenc.com/api/translation/sura/french_hameedullah/${i}`)
                        .then(response => response.json())
                        .then((result) => {
                            console.log("in fetch loop number " + i)
                            // let numberNow = i;  
                            //  console.log(surat)
                            // setSurat({i : result.result })
                            setSurat([i, result.result])
                        })
            
    
                //  setQuran(surat)
                //  console.log("state after fetch : ")
                //console.log(surat)
            }
    
    
        }, [])
        /*
        /* console.log(quran.map((obj) => {
             return obj  
         }))*/
    // console.log(surat[1][0].sura /*.map(x=> console.log(x.sura))  */)
    /*
    useEffect(() => {

        console.log(surat[1]);
       // let arr = [];
      //  quran.push([surat[1][0].sura, surat[1]]);
        //setQuran(()=> quran.push(arr))
        // console.log(surat[1][0].sura)
        //$    

    }, [surat])
    console.log("Quran : { ");
    console.log(quran);
    console.log("}");

    */

    const [surat, setSurat] = useState([]);
    const [quran, setQuran] = useState([]);

    const getQuran = (number) => {
        let arr = [];
        for (let i = 1; i < number; i++) {

            fetch(`https://quranenc.com/api/translation/sura/french_hameedullah/${i}`)
                .then(response => response.json())
                .then((result) => {
                    //  console.log("in fetch loop number " + i)
                    // let numberNow = i;  
                    //  console.log(surat)
                    // setSurat({i : result.result })
                    //setSurat([i, result.result])

                    //  console.log(arr);
                    arr.push(result.result);
                    //setQuran([...quran, result.result])
                    //console.log(arr);
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
                console.log(quran[i][0].sura)
                console.log(quran[i].map(x => x.translation))
                arrayOfSurat.push({
                    sourate: quran[i][0].sura,
                    verset: quran[i].map(x => <p>{x.aya } <br/>{x.translation}</p>)
                })

            }
            //  console.log(arrayOfSurat)
            setSurat(arrayOfSurat)

        }, 1000)

    }, [quran])

    console.log(quran)
    console.log(surat)
    /*
        useEffect(() => { 
            for (let i = 0; i < 114; i++) {
                console.log("before fetch " + i)
                console.log(surat);
                fetch(`https://quranenc.com/api/translation/sura/french_hameedullah/${i}`)
                    .then(response => response.json())
                    .then((result) => {
                        console.log("in fetch loop number " + i)
                        // let numberNow = i;  
                        //  console.log(surat)
                        // setSurat({i : result.result })
                        setSurat([i, result.result])
                    })
    
    
                //  setQuran(surat)
                //  console.log("state after fetch : ")
                //console.log(surat)
            }
    
    
        }, [])
    
        useEffect(() => {
            let arr = [];
    
            if (surat !== "") {
                console.log("test useEffect condition: {")
                console.log(surat)
                console.log("}")
                arr.push(surat);
                console.log("arr : [")
                console.log(arr)
                console.log("]")
            } else {
                //  return
            }
    
    
        }, [surat])
    
    
        */
    return (
        <div
            // key={}
            style={{ color: "black", textAlign: "center" }}
        >
            {
                surat.map((obj, idx) => {
                    return <div key={idx}>
                        <h2>{obj.sourate}</h2>
                        {  /*  <p>{obj.arabic_text}</p>
                        <p>{obj.translation}</p>*/}

                        <div>{obj.verset}</div>

                    </div>
                })

            }
            <button onClick={() => getQuran(115)}>click</button>
        </div>
    )
}