import{
    getAllRockets,
    getAllRocketsId
} from "../modules/rockets.js"
import { 
    nameRockets 
} from "./title.js";
import { 
    informationRockets, 
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket
} from "./information.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";
import { 
    imageRockets 
} from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "./progressBar.js";


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