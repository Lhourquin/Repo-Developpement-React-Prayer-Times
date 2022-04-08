import React, { useEffect, useState } from "react";
import "./Quran.css"



export const Quran = () => {


    const [surat, setSurat] = useState([]);
    const [quran, setQuran] = useState([]);
    const [suratName, setSuratName] = useState([
        ["Prologue (Al-Fatiha)."],
        ["La vache (Al-Baqarah)."],
        ["La famille d'Imran (Al-Imran)."],
        ["Les femmes (An-Nisa')."],
        ["La table servie (Al-Maidah)."],
        ["Les bestiaux (Al-Anam)."],
        ["Al-Araf."],
        ["Le butin (Al-Anfal)."],
        ["Le repentir (At-Tawbah)."],
        ["Jonas (Yunus)."],
        ["Hud."],
        ["Joseph (Yusuf)."],
        ["Le tonnerre (Ar-Raad)."],
        ["Abraham (Ibrahim)."],
        ["Al-Hijr."],
        ["Les abeilles (An-Nahl)."],
        ["Le voyage nocturne (Al-Isra)."],
        ["La caverne (Al-Kahf)."],
        ["Marie (Maryam)."],
        ["Ta-Ha."],
        ["Les prophètes (Al-Anbiya)."],
        ["Le pélerinage (Al-Hajj)."],
        ["Les croyants (Al-Muminune)."],
        ["La lumière (An-Nur)."],
        ["Le discernement (Al Furqane)."],
        ["Les poètes (As-Shuaraa)."],
        ["Les fourmis (An-Naml)."],
        ["Le récit (Al-Qasas)."],
        ["L'araignée (Al-Ankabut)."],
        ["Les romains (Ar-Rum)."],
        ["Luqman."],
        ["La prosternation (As-Sajda)."],
        ["Les coalisés (Al-Ahzab)."],
        ["Saba."],
        ["Le Créateur (Fatir)."],
        ["Ya-Sin."],
        ["Les rangés (As-Saffat)."],
        ["Sad."],
        ["Les groupes (Az-Zumar)."],
        ["Le pardonneur (Gafir)."],
        ["Les versets détaillés (Fussilat)."],
        ["La consultation (Achoura)."],
        ["L'ornement (Azzukhruf)."],
        ["La fumée (Ad-Dukhan)."],
        ["L'agenouillée (Al-Jathya)."],
        ["Al-Ahqaf."],
        ["Muhammad."],
        ["La victoire éclatante (Al-Fath)."],
        ["Les appartements (Al-Hujurat)."],
        ["Qaf."],
        ["Qui éparpillent (Ad-Dariyat)."],
        ["At-Tur."],
        ["L'étoile (An-Najm)."],
        ["La lune (Al-Qamar)."],
        ["Le Tout Miséricordieux (Ar-Rahman)."],
        ["L'événement (Al-Waqi'a)."],
        ["Le fer (Al-Hadid)."],
        ["La discussion (Al-Mujadalah)."],
        ["L'exode (Al-Hasr)."],
        ["L'éprouvée (Al-Mumtahanah)."],
        ["Le rang (As-Saff)."],
        ["Le vendredi (Al-Jumua)."],
        ["Les hypocrites (Al-Munafiqun)."],
        ["La grande perte (At-Tagabun)."],
        ["Le divorce (At-Talaq)."],
        ["L'interdiction (At-Tahrim)."],
        ["La royauté (Al-Mulk)."],
        ["La plume (Al-Qalam)."],
        ["Celle qui montre la vérité (Al- Haqqah)."],
        ["Les voies d'ascension (Al- Maarij)."],
        ["Noé (Nuh)."],
        ["Les djinns (Al-Jinn)."],
        ["L'enveloppé (Al-Muzzamil)."],
        ["Le revêtu d'un manteau (Al-Muddattir)."],
        ["La résurrection (Al-Qiyamah)."],
        ["L'homme (Al-Insan)."],
        ["Les envoyés (Al-Mursalate)."],
        ["La nouvelle (An-Naba)."],
        ["Les anges qui arrachent les âmes (An-Naziate)."],
        ["Il s'est renfrogné (Abasa)."],
        ["L'obscurcissement (At-Takwir)."],
        ["La rupture (Al-Infitar)."],
        ["Les fraudeurs (Al-Mutaffifune)."],
        ["La déchirure (Al-Insiqaq)."],
        ["Les constellations (Al-Buruj)."],
        ["L'astre nocturne (At-Tariq)."],
        ["Le Très-Haut (Al-Ala)."],
        ["L'enveloppante (Al-Gasiyah)."],
        ["L'aube (Al-Fajr)."],
        ["La cité (Al-Balad)."],
        ["Le soleil (Ach-Chams)."],
        ["La nuit (Al-Layl)."],
        ["Le jour montant (Ad-Duha)."],
        ["L'ouverture (As-Sarh)."],
        ["Le figuier (At-Tin)."],
        ["L'adhérence (Al-Alaq)."],
        ["La Destinée (Al-Qadr)."],
        ["La preuve (Al-Bayyinah)."],
        ["La secousse (Az-Zalzalah)."],
        ["Les coursiers (Al-Adiyate)."],
        ["Le fracas (Al-Qariah)."],
        ["La course aux richesses (At-Takatur)."],
        ["Le temps (Al-Asr)."],
        ["Les calomniateurs (Al-Humazah)."],
        ["L'éléphant (Al-Fil)."],
        ["Qoraïsh."],
        ["L'ustensile (Al-Maun)."],
        ["L'abondance (Al-Kawtar)."],
        ["Les infidèles (Al-Kafirune)."],
        ["Les secours (An-Nasr)."],
        ["Les fibres (Al-Masad)."],
        ["Le monothéisme pur (Al-Ihlas)."],
        ["L'aube naissante (Al-Falaq)."],
        ["Les hommes (An-Nas)."],
    ])

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
                    sourate: suratName[Number(quran[i][0].sura) - 1],
                    verset: quran[i].map(x => <div className="surat-aya">
                        <p className="aya-number">{x.aya}</p>
                        <p className="aya-arabic" >{x.arabic_text}</p>

                        <p className="aya-translate">{x.translation}</p>
                    </div>
                    )
                })

            }
            //  console.log(arrayOfSurat)
            arrayOfSurat.sort((a, b) => a.id - b.id)
            setSurat(arrayOfSurat)

        }, 1000)

    }, [quran])

    console.log(quran)
    console.log(surat)
    console.log(suratName)

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
                            cursor : "default"
                        }
                            : { display: "none" }}>
                            <button className="return" onClick={() => close()}>{"<<"}</button>
                            <div className="surat-title-number"> {obj.id} {obj.sourate}</div>


                            <div className="surat-content">{obj.verset}</div>


                        </div>
                    </div>
                })

            }


        </div >
    )
}