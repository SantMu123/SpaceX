import{
    getAllRockets,
    getAllRocketsId
} from "../modules/rockets.js"
import{
    getAllCapsules,
    getAllCapsulesId
} from "../modules/capsules.js"
import{
    getAllInfoCompany
} from "../modules/InfoCompany.js"
import{
    getAllInfoCrew
} from "../modules/CrewCompany.js"
import{
    getAllInfoEvents
} from "../modules/HistoryEvents.js"
import { 
    nameRockets,
    nameCapsules,
    nameCompany 
} from "./title.js";
import { 
    informationRockets, 
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    informationCapsule,
    summaryCompany,
    CrewMembers,
    informationWebCrew
} from "./information.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum,
    ceoInformation
} from "./inform.js";
import { 
    imageRockets
    //infoCompanyImages 
} from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
    headquartersInformation
} from "./progressBar.js";
import {
    tableRocketColum1,
    tableRocketColum2,
    tableCapsuleColumn1,
    tableCapsuleColumn2,
    valuationCompany
} from "./tables.js"

const getRocketsId = async(e) => {
    e.preventDefault();
    let a = e.target.parentElement.children
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = ""; //esta parte es esencial para que no se acumulen las imagenes cuando se pase a otro cohete

    let Rocket = await getAllRocketsId(e.target.id)

    await informationRockets(Rocket.country, Rocket.description)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}


export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div")
    div.classList.add("buttom_paginacion")

    rockets.forEach((val, id) =>{
        let a = document.createElement("a")
        a.setAttribute("href", "#")
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a)
    });
    let [a1,a2,a3,a4] = div.children
    a3.click()
    return div;
}

const getCapsulesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector("#section__information__2")
    section__information__2.innerHTML = ""

    let Capsule = await getAllCapsulesId(e.target.id)

    await nameCapsules(Capsule)

    await informationCapsule(Capsule.last_update)

    await tableCapsuleColumn1(Capsule)
    await tableCapsuleColumn2(Capsule)
    // let Rocket = await getAllRocketsId(e.target.id);
    // console.log(Rocket);

    // await informationRockets(Rocket.country, Rocket.description)
    
}

export const paginationCapsules = async(page=1, limit=5)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


export const getInfoCompany = async()=>{
    
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector("#section__information__2")
    section__information__2.innerHTML = ""
    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ""
    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ""

    let infoCompany = await getAllInfoCompany()

    await nameCompany(infoCompany)

    await ceoInformation(infoCompany)

    await summaryCompany(infoCompany.summary)

    await headquartersInformation(infoCompany)

    await valuationCompany(infoCompany)

    // let Rocket = await getAllRocketsId(e.target.id);
    // console.log(Rocket);

    // await informationRockets(Rocket.country, Rocket.description)
    
}

export const getCrewCompany = async()=>{
    
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector("#section__information__2")
    section__information__2.innerHTML = ""
    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ""
    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ""

    let title = document.querySelector("#header__title")
    title.innerHTML = ""
    let h1 = document.createElement("h1")
    h1.innerHTML = "Members Crew"

    title.append(h1)

    //let infoCompany = await getAllInfoCrew()
    //console.log(infoCompany)
    try {
        let infoCompany = await getAllInfoCrew();
        
        // Verifica que infoCompany es un array
        if (Array.isArray(infoCompany)) {
            for (let val of infoCompany) {
                await CrewMembers(val);
                await informationWebCrew(val)
            }   
        } else {
            console.error('Error: La respuesta de la API no es una lista de objetos.');
        }
    } catch (error) {
        console.error('Error al obtener la información de la API:', error);
    }
    
    //await CrewMembers(infoCompany)
    
}

export const getHistoryEvents = async()=>{
    
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector("#section__information__2")
    section__information__2.innerHTML = ""
    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ""
    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ""

    let title = document.querySelector("#header__title")
    title.innerHTML = ""
    let h1 = document.createElement("h1")
    h1.innerHTML = "Members Crew"

    title.append(h1)

    let infoCompany = await getAllInfoEvents()
    console.log(infoCompany)
    
    
}