export const nameRockets = async(name)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;
}

export const nameCapsules = async(name) =>{
    let header__title = document.querySelector("#header__title")
    header__title.innerHTML = "";
    header__title.textContent = name.type
}