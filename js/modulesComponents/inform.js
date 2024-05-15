import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal
} from "../modules/rockets.js";

export const informRocketEngineThrustSeaLevel = async(thrust_sea_level)=>{
    let {kN:totalKN} = await getAllRocketEngineTotal();
    let pocentaje = (thrust_sea_level.kN * 100) / totalKN

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Atmospheric acceleration"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`
    
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div)
}

export const informRocketEngineThrustVacuum = async(thrust_vacuum)=>{
    let {kN:totalKN} = await getAllRocketEngineThrustVacuumTotal();
    let pocentaje = (thrust_vacuum.kN * 100) / totalKN;

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Speed in space"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`
    
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__2");
    section__information__1.innerHTML = "";
    section__information__1.append(div)
}

export const ceoInformation = async(info)=>{
    
    let h3 = document.createElement("h3")
    h3.innerHTML = `CEO of ${info.name}`
    let h1 = document.createElement("h1")
    h1.innerHTML = `${info.ceo}`

    let section__information__main = document.querySelector("#section__information__main");
    section__information__main.style.color = "white"
    section__information__main.innerHTML = "";
    section__information__main.append(h3, h1)

    let h3_2 = document.createElement("h3")
    h3_2.innerHTML = `COO of ${info.name}`
    let h1_2 = document.createElement("h1")
    h1_2.innerHTML = `${info.coo}`

    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.style.color = "white"
    section__information__1.innerHTML = "";
    section__information__1.append(h3_2, h1_2)

    let h3_3 = document.createElement("h3")
    h3_3.innerHTML = `CTO Propulsion of ${info.name}`
    let h1_3 = document.createElement("h1")
    h1_3.innerHTML = `${info.cto_propulsion}`

    let section__information__2 = document.querySelector("#section__information__2");
    section__information__2.style.color = "white"
    section__information__2.innerHTML = "";
    section__information__2.append(h3_3, h1_3)


}

export const DetailsEventInformation = async(info)=>{
    
    let h2 = document.createElement("h3")
    h2.innerHTML = "Description"

    let section__information__main = document.querySelector("#section__information__main");
    section__information__main.style.color = "white"
    section__information__main.innerHTML = "";
    
    let p = document.createElement("p")
    p.innerHTML = info.details

    section__information__main.append(h2, p)


}

export const DetailsCoreInformation = async(info)=>{
    
    let h2 = document.createElement("h3")
    h2.innerHTML = "Main Information"

    let section__information__main = document.querySelector("#section__information__main");
    section__information__main.style.color = "white"
    section__information__main.innerHTML = "";
    
    let h3 = document.createElement("h3")
    h3.innerHTML = "Last Update"
    let p = document.createElement("p")
    p.innerHTML = info.last_update

    let h3_2 = document.createElement("h3")
    h3_2.innerHTML = `serial: ${info.serial}`

    let h3_3 = document.createElement("h3")
    h3_3.innerHTML = `Status: ${info.status}`
    

    section__information__main.style.display = "flex"
    section__information__main.style.flexDirection = "column"

    section__information__main.append(h2,p,h3,h3_2,h3_3)


}