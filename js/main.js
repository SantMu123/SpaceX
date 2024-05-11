import {
    paginationRockets,
    paginationCapsules,
    getInfoCompany
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
