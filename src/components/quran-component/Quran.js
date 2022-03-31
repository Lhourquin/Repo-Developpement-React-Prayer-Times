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

    const [surat, setSurat] = useState("");
    const [quran, setQuran] = useState([]);

    const getQuran = (number) => {
        let arr = [];
        for(let i = 1; i < number; i++){
            
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

   useEffect(()=> {
    getQuran(115)
 
   }, [])

   useEffect(()=> {
    console.log(quran.map(x => 
        x
        //x.map(r => r.sura)
       // return x.map( item => item.sura)
    ));

   })
 
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
            {/*
                surat.map((obj) => {
                    return <div key={obj.id}>
                        <h2>{obj.aya}</h2>
                        <p>{obj.arabic_text}</p>
                        <p>{obj.translation}</p>

                    </div>
                })
                */
            }
            <button onClick={()=>getQuran(115)}>click</button>
        </div>
    )
}