import React, { useState, useEffect } from "react";
import "./TodayTimesList.css";
import { CalculMidnight } from "./calcul-midnigh-today/CalculMidnightToday";

export const TodayTimesList = ({ today }) => {
  const [displayHadith, setDisplayHadith] = useState(false);
  const [listOfHadith, setListOfHadith] = useState([
    {
      fajrHadith: {
        title: " Prier le Fajr avant le lever complet du soleil (shourouq) :",
        hadith: `
         
 
      Le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit:
       « Le temps de la prière du matin (fajr) commence  dès la levée de l’aube et dure jusqu’au lever du soleil. 
       Lorsque le soleil pointe (c'est à dire au moment du shourouq), abstiens-toi de prier, car l’astre se lève entre les deux cornes de Satan»  
`,
        source: "(rapporté par Mouslim, 612).",
        postScriptum: "",
      },

      dhohrHadith: {
        title: "Le temps de la prière du dhohr :",
        hadith: `
 
      Le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit:
        Le temps du dhohr arrive lorsque le soleil dépasse le zénith jusqu’au moment
        où l’ombre de l’homme est égale à sa longueur jusqu’à la prière du ‘asr.`,
        source: "(rapporté par Mouslim, 612).",
        postScriptum: "",
      },
      asrHadith: {
        title: "Prier le Asr avant la fin de son temps :",
        hadith: `

        Abou El Malih a dit : 
        « Par un jour nuageux, nous étions en expédition avec Boraïda. – Hâtez l’heure de la prière de l’après-midi (‘asr) nous fit-il remarquer, 
        car le Prophète (que la prière d'Allah et Son salut soient sur lui)a dit : « Celui qui laisse passer le temps* de la prière de l’après-midi (le asr) verra ses actions annulées ». » 
       
        
        
        
        `,
        postScriptum: `* Il se termine quand le soleil devient pâle (en général ≈ 15 minutes avant le maghrib) ; pourtant il est rapporté dans un hadith authentique que son temps se termine au moment du coucher du soleil : من أدرك ركعة من العصر قبل أن تغرب الشمس فقد أدرك العصر  → « Celui qui a atteint une rak’a de la prière du ‘asr avant que le soleil ne se couche a atteint le ‘asr » (Al Boukari).

 

        → En fait, entre la pâleur du soleil et son coucher, il est interdit de reporter le temps de la prière sauf pour une « daroûra » (nécessité absolue).
        
        Et donc le ‘asr a 2 temps : un temps optionnel qui va jusqu’à la pâleur du soleil, et un temps de daroûrah (nécessité absolue) qui va jusqu’au coucher du soleil.

        L'imam Nawawi (mort en 676) dans Charh Sahih Mouslim 1 p 450 : 
        « Sache que le fait de retarder la prière jusqu'au moment de la fraicheur est légiféré pour la prière du dohr et n'est pas légiféré pour la prière du 'asr pour l'ensemble des savants sauf Ach'hath Al Maliki; et cela n'est pas légiféré pour la prière du vendredi pour la majorité des savants ».`,
        source: " [Sahih al-Bukhari 553]",
      },
      maghrebHadith: {
        title:
          "L'incitation à prier la prière du maghreb au début de son temps :",
        hadith: `
 
      
      D'après Souweyd Ibn Ghafala, 'Omar Ibn Al Khattab (qu'Allah l'agrée) a dit : « Priez cette prière alors que les chemins sont lumineux » ; c'est à dire le maghreb. (*)
      
      `,
        source:
          "(Rapporté par Ibn Abi Chayba dans son Moussannaf n°3354 et authentifié par Cheikh Chathri dans sa correction du Moussannaf de Ibn Abi Chayba vol 3 p 220)",
        postScriptum: `(*) Ainsi, le sens de ce texte est qu'il est recommandé de prier le maghreb au début de son temps.
      
    L'imam Ibn Abi Chayba (mort en 235 du calendrier hégirien) a cité ce hadith dans son Moussannaf dans le chapitre intitulé : - Ceux qui étaient d'avis qu'il faut s'empresser de prier le maghreb -.
    (Moussannaf de Ibn Abi Chayba vol 3 p 219)`,
      },
      ichaHadith: {
        title: "Prier le Icha avant la fin de son temps :",
        hadith: `
        
        
        D'après 'Abdallah Ibn 'Amr (qu'Allah les agrée), le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit:
         « Le temps de la prière du 'icha est jusqu'au milieu de la nuit ».
        `,
        source: `        (Rapporté par Mouslim dans son Sahih n°612)
        `,
        postScriptum: ``,
      },
      qiyammHadith: {
        title: "La recommandation de la prière de nuit :",
        hadith1: `

        le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit:
        « Chaque nuit, quand parvient le dernier tiers de la nuit, notre Seigneur, 
        béni et exalté, descend au ciel le plus proche et dit : « Y a t-il quelqu’un pour M’invoquer afin que je réponde à son invocation ?
         Y a t-il quelqu’un pour Me demander afin que je lui accorde sa demande ? 
         Y a t -il quelqu’un qui Me demande pardon pour que je lui pardonne ? » 
         
         Sahih al-Bukhari 7494 `,
        hadith2: `D'après Abou Houreira (qu'Allah l'agrée), le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit:
        « Le meilleur jeûne après celui du ramadan est le mois d'Allah sacré (al mouharam),
        et la meilleure prière après les prières obligatoires est la prière de nuit ».
      (Rapporté par Mouslim dans son Sahih n°1162) `,
        hadith3: `D'après Joundoub Ibn Sofiane (qu'Allah les agrée), le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit: 
      « Certes la meilleure prière après les prières obligatoires est la prière au coeur de la nuit et le meilleur jeûne après le ramadan est le mois d'Allah que vous appelez mouharam ».
      (Rapporté par Nasai et authentifié par Cheikh Albani dans Sahih Targhib n°1016)`,
        source: "",
        postScriptum: ` Remarque :
 
       Pourquoi dans ces textes le Prophète (que la prière d'Allah et Son salut soient sur lui) a t-il dit « le mois d'Allah » en parlant du mois de Mouharam alors qu'il y a d'autres mois qui sont équivalent à Mouhram dans le mérite ou qui sont meilleurs comme Ramadan ?
 
       L'imam Souyouti (mort en 911) a dit : « La réponse est que ceci est un mois islamique à la différence des autres mois de l'année, dont les noms n'ont pas changés depuis la période pré-islamique.
       En effet, le nom de Mouharam durant la période pré-islamique était -Safar Al Awal- et celui qui le suivait -Safar Al Thani-. Puis lorsque l'Islam est venu ce mois a été appelé Mouharam et c'est pour cela qu'il a été attribué à Allah ».
       (Al Dibaj Charh Sahih Mouslim Ibn Hajjaj vol 3 p 251)`,
      },
    },
  ]);

  const [currentHadith, setCurrentHadith] = useState("");

  const toggleDisplay = (index) => {
    if (index == 1) {
      setDisplayHadith((boolean) => !boolean);
      setCurrentHadith({
        title: listOfHadith[0].fajrHadith.title,
        hadith: listOfHadith[0].fajrHadith.hadith,
        source: listOfHadith[0].fajrHadith.source,
        postScriptum: listOfHadith[0].fajrHadith.postScriptum,
      });
    } else if (index === 2) {
      setDisplayHadith((boolean) => !boolean);
      setCurrentHadith({
        title: listOfHadith[0].dhohrHadith.title,
        hadith: listOfHadith[0].dhohrHadith.hadith,
        source: listOfHadith[0].dhohrHadith.source,
        postScriptum: listOfHadith[0].dhohrHadith.postScriptum,
      });
    } else if (index === 3) {
      setDisplayHadith((boolean) => !boolean);
      setCurrentHadith({
        title: listOfHadith[0].asrHadith.title,
        hadith: listOfHadith[0].asrHadith.hadith,
        source: listOfHadith[0].asrHadith.source,
        postScriptum: listOfHadith[0].asrHadith.postScriptum,
      });
    } else if (index === 4) {
      setDisplayHadith((boolean) => !boolean);
      setCurrentHadith({
        title: listOfHadith[0].maghrebHadith.title,
        hadith: listOfHadith[0].maghrebHadith.hadith,
        source: listOfHadith[0].maghrebHadith.source,
        postScriptum: listOfHadith[0].maghrebHadith.postScriptum,
      });
    } else if (index === 5) {
      setDisplayHadith((boolean) => !boolean);
      setCurrentHadith({
        title: listOfHadith[0].ichaHadith.title,
        hadith: listOfHadith[0].ichaHadith.hadith,
        source: listOfHadith[0].ichaHadith.source,
        postScriptum: listOfHadith[0].ichaHadith.postScriptum,
      });
    } else if (index === 6) {
      setDisplayHadith((boolean) => !boolean);
      setCurrentHadith({
        title: listOfHadith[0].qiyammHadith.title,
        hadith: listOfHadith[0].qiyammHadith.hadith1,
        hadith2: listOfHadith[0].qiyammHadith.hadith2,
        hadith3: listOfHadith[0].qiyammHadith.hadith3,
        source: listOfHadith[0].qiyammHadith.source,
        postScriptum: listOfHadith[0].qiyammHadith.postScriptum,
      });
    }
  };

  const closeHadith = () => {
    setDisplayHadith((boolean) => !boolean);
  };

  const [dateFajr, setDateFajr] = useState("");
  const [dateShourouq, setDateShourouq] = useState("");
  const [dateDhohr, setDateDhohr] = useState("");
  const [dateAsr, setDateAsr] = useState("");
  const [dateMaghreb, setDateMaghreb] = useState("");
  const [dateIcha, setDateIcha] = useState("");

  useEffect(() => {
    /* let timer = setTimeout(() =>{*/
    today.map((obj) => {
      setDateFajr(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Fajr}:00`
        )
      );
      setDateShourouq(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Sunrise}:00`
        )
      );
      setDateDhohr(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Dhuhr}:00`
        )
      );
      setDateAsr(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Asr}:00`
        )
      );
      setDateMaghreb(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Maghrib}:00`
        )
      );
      setDateIcha(
        new Date(
          `${obj.data.date.gregorian.month.en} ${obj.data.date.gregorian.day}, ${obj.data.date.gregorian.year} ${obj.data.timings.Isha}:00`
        )
      );
    });

    //  });

    //      return () => clearTimeout(timer);
    /* setDay(obj.data.date.gregorian.day);
      setMonth(obj.data.date.gregorian.month.en);
      setYear(obj.data.date.gregorian.year);*/
  }, [today]);

  const [now, setNow] = useState(new Date(Date.now()).getTime());

  useEffect(() => {
    let interval = setInterval(() => {
      setNow(new Date(Date.now()).getTime());
    });

    return () => clearInterval(interval);
  });

  const [timeExceed, setTimeExceed] = useState([
    {
      timeExceedFajr: false,
      timeExceedDhohr: false,
      timeExceedDhohr: false,
      timeExceedAsr: false,
      timeExceedMaghreb: false,
      timeExceedIcha: false,
      timeExceedMidnight: false,
    },
  ]);

  //setTimeExceed(() => !timeExceed.timeExceedFajr)

  /*  useEffect(() => {

    if(now <  new Date(
      `${obj.data.date.gregorian.month.en} ${
        Number(obj.data.date.gregorian.day) + 1
      }, ${obj.data.date.gregorian.year} 00:00:00`
    ) ){
      const newTimeExceed = [...timeExceed];
    newTimeExceed.map((obj) => (obj.timeExceedAsr = true));
    setTimeExceed(newTimeExceed);
    console.log(timeExceed);
    }
    
  }, []);*/
  //
  // console.log(today);
  return (
    <>
      {displayHadith === true ? (
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            width: "100%",
            height: "100%",
            top: "0",
            position: "absolute",
          }}
        >
          {" "}
          <button className="closeHadith" onClick={closeHadith}>
          <i class="fas fa-times-circle"></i>

          </button>
          <div className="hadith-container">
            <div className="hadith-container-current">
              <h2 className="hadith-container-current-title">
                {currentHadith.title}
              </h2>
              <h3>
                Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.
              </h3>
              <p>{currentHadith.hadith}</p>
              <p>{currentHadith.hadith2}</p>
              <p>{currentHadith.hadith3}</p>
              <p>{currentHadith.source}</p>
              <p>{currentHadith.postScriptum}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {today.map((obj, index) => (
        <ul className="TodayTimesList__ul-times-list" key={index}>
          <li
            className="TodayTimesList__ul-times-list__li"
            style={
              displayHadith === false && now > dateFajr && now > dateShourouq
                ? { opacity: "0.5" }
                : displayHadith === true && now > dateFajr && now > dateShourouq
                ? { opacity: "0" }
                : now > dateFajr && now < dateShourouq
                ? { backgroundColor: "#605b56", color: "#65D977" }
                : displayHadith === false && now < dateFajr
                ? { backgroundColor: "#92BFEE", opacity: "0.8" }
                : displayHadith === true && now < dateFajr
                ? { opacity: "0.0" }
                : {}
            }
          >
            <span>
              FAJR {obj.data.timings.Fajr} -
              <span>SHOUROUQ {obj.data.timings.Sunrise}</span>{" "}
            </span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i
                style={displayHadith ? { opacity: "0.1" } : {}}
                className="fas fa-info-circle info-icons"
                onClick={() => toggleDisplay(1)}
              ></i>
            </span>
          </li>
          <li
            style={
              displayHadith === false && now > dateAsr
                ? { opacity: "0.5" }
                : displayHadith === true && now > dateAsr
                ? { opacity: "0" }
                : now > dateDhohr && now < dateAsr
                ? { backgroundColor: "#605b56", color: "#65D977" }
                : displayHadith === false &&
                  now < dateDhohr &&
                  now > dateShourouq
                ? { backgroundColor: "#92BFEE", opacity: "0.8" }
                : displayHadith === true &&
                  now < dateDhohr &&
                  now > dateShourouq
                ? { opacity: "0" }
                : {}
            }
            className="TodayTimesList__ul-times-list__li"
          >
            <span>DHOHR {obj.data.timings.Dhuhr} </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i
                style={displayHadith ? { opacity: "0.1" } : {}}
                className="fas fa-info-circle info-icons"
                onClick={() => toggleDisplay(2)}
              ></i>
            </span>{" "}
          </li>
          <li
            style={
              displayHadith === false && now > dateMaghreb
                ? { opacity: "0.5" }
                : displayHadith === true && now > dateMaghreb
                ? { opacity: "0" }
                : now > dateAsr && now < dateMaghreb
                ? { backgroundColor: "#605b56", color: "#65D977" }
                : displayHadith === false && now < dateAsr && now > dateDhohr
                ? { backgroundColor: "#92BFEE", opacity: "0.8" }
                : displayHadith === false && now < dateAsr && now > dateDhohr
                ? { opacity: 0 }
                : {}
            }
            className="TodayTimesList__ul-times-list__li"
          >
            <span>
              ASR {obj.data.timings.Asr} {/*- PALEUR DU SOLEIL 16:45 */}
            </span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i
                style={displayHadith ? { opacity: "0.1" } : {}}
                className="fas fa-info-circle info-icons"
                onClick={() => toggleDisplay(3)}
              ></i>
            </span>{" "}
          </li>
          <li
            style={
              displayHadith === false && now > dateIcha
                ? { opacity: "0.5" }
                : displayHadith === true && now > dateIcha
                ? { opacity: "0" }
                : now > dateMaghreb && now < dateIcha
                ? { backgroundColor: "#605b56", color: "#65D977" }
                : displayHadith === false && now < dateMaghreb && now > dateAsr
                ? { backgroundColor: "#92BFEE", opacity: "0.8" }
                : displayHadith === true && now < dateMaghreb && now > dateAsr
                ? { opacity: "0" }
                : {}
            }
            className="TodayTimesList__ul-times-list__li"
          >
            <span>MAGHREB {obj.data.timings.Maghrib} </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i
                style={displayHadith ? { opacity: "0.1" } : {}}
                className="fas fa-info-circle info-icons"
                onClick={() => toggleDisplay(4)}
              ></i>
            </span>{" "}
          </li>
          <li
            style={
              now > dateIcha &&
              now <
                new Date(
                  `${obj.data.date.gregorian.month.en} ${
                    Number(obj.data.date.gregorian.day) + 1
                  }, ${obj.data.date.gregorian.year} 00:00:00`
                )
                ? { backgroundColor: "#605b56", color: "#65D977" }
                : displayHadith === false && now < dateIcha && now > dateMaghreb
                ? { backgroundColor: "#92BFEE", opacity: "0.8" }
                : displayHadith === true && now < dateIcha && now > dateMaghreb
                ? { opacity: "0" }
                : {}
            }
            className={
              "TodayTimesList__ul-times-list__li " /* + now < dateFajr ? " prayerTimePass" :
            now > dateIcha &&
                  now <
                    new Date(
                      `${obj.data.date.gregorian.month.en} ${
                        Number(obj.data.date.gregorian.day) + 1
                      }, ${obj.data.date.gregorian.year} 00:00:00`
                    )
                ? "TodayTimesList__ul-times-list__li prayerTimeNow" : " nextPrayerTime"*/
            }
          >
            <span>
              ICHA {obj.data.timings.Isha} - MINUIT{" "}
              <CalculMidnight todayMidnight={today} />{" "}
            </span>{" "}
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i
                style={displayHadith ? { opacity: "0.1" } : {}}
                className="fas fa-info-circle info-icons"
                onClick={() => toggleDisplay(5)}
              ></i>
            </span>{" "}
          </li>
          {/* <li className="TodayTimesList__ul-times-list__li">
            <span>QIYAMM AL LAYL 03:45</span>
            <span className="TodayTimesList__ul-times-list__li__span--information">
              {" "}
              <i
                style={displayHadith ? { opacity: "0.1" } : {}}
                className="fas fa-info-circle info-icons"
                onClick={() => toggleDisplay(6)}
              ></i>
            </span>{" "}
          </li>*/}
        </ul>
      ))}
      {}
    </>
  );
};
