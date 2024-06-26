export const imageRockets = async(flickr_images)=>{
    let section__image = document.querySelector("#section__image")
    let divs = [];
    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("swiper-slide")
        let img = document.createElement("img");
        img.setAttribute("src", val)
        img.setAttribute("referrerpolicy", "no-referrer")
        div.append(img)
        divs.push(div);
    });
    section__image.append(...divs)
}

// export const infoCompanyImages = async(image) => {
//     let section__image = document.querySelector("#section__image")
//     let div = document.createElement("div")
//     let img = document.createElement("img")
//     img.setAttribute("src", image)
//     img.setAttribute("referrerpolicy", "no-referrer")
//     div.append(img)
//     section__image.append(div)
// }