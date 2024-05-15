import {
    paginationRockets,
    paginationCapsules,
    getInfoCompany,
    getCrewCompany,
    PaginationHistoryEvents,
    PaginationCores
} from "./modulesComponents/pagination.js"

let footerSelect = async(e, id)=>{
    e.preventDefault();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}

let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
})

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())

})


let InfoCompany = document.querySelector("#InfoCompany")
InfoCompany.addEventListener("click", async(e)=>{
    await getInfoCompany()
})

let Crew = document.querySelector("#Crew")
Crew.addEventListener("click", async(e)=>{
    await getCrewCompany()
})

let Events = document.querySelector("#Events")
Events.addEventListener("click", async(e)=>{
    await footerSelect(e, Events)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await PaginationHistoryEvents())
})

let Cores = document.querySelector("#Cores")
Cores.addEventListener("click", async(e)=>{
    await footerSelect(e, Cores)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await PaginationCores())
})