export const informationRockets = async(country, description) => {
    let div = document.createElement('div')
    div.classList.add('description__container')
    let divFirst = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}

export const informationCapsule = async(lastUpadated) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    h3.textContent = "Last Updated about the ship"
    let p = document.createElement("p")
    p.textContent = lastUpadated

    div.append(h3,p)
    description__item.append(div)
}

export const summaryCompany = async(summary) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    h3.textContent = "About Space X"
    let p = document.createElement("p")
    p.textContent = summary

    div.append(h3,p)
    description__item.append(div)
}

export const CrewMembers = async(member) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    h2.textContent = `Name: ${member.name}`
    let h4 = document.createElement("h4")
    h4.textContent = `Agency: ${member.agency}`
    let span = document.createElement("span")
    span.textContent = `Status: ${member.status}`
    let img = document.createElement("img")
    img.src = `${member.image}`
    img.alt = "Member Photo"
    img.width = 100;
    img.height = 100;
    
    div.style.display = "flex";
    div.style.flexDirection = "column"
    div.style.justifyContent = 'center'; // Centra verticalmente si flexDirection es 'column'
    div.style.alignItems = 'center';

    div.append(h2,h4,span,img)
    description__item.append(div)
}

export const informationWebCrew = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container');
    let divFirst = document.createElement('div');
    let h2 = document.createElement("h2")
    h2.textContent = `Name: ${wikipedia.name}`
    let img = document.createElement('img');
    img.setAttribute("src", `${wikipedia.image}`)
    img.width = 100;
    img.height = 100;
    divFirst.append(h2, img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the member"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia.wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"

    div.style.display = "flex";
    div.style.flexDirection = "column"
    div.style.justifyContent = 'center'; // Centra verticalmente si flexDirection es 'column'
    div.style.alignItems = 'center';

    divLast.style.display = "flex";
    divLast.style.flexDirection = "column"
    divLast.style.justifyContent = 'center'; // Centra verticalmente si flexDirection es 'column'
    divLast.style.alignItems = 'center';

    divFirst.style.display = "flex";
    divFirst.style.flexDirection = "column"
    divFirst.style.justifyContent = 'center'; // Centra verticalmente si flexDirection es 'column'
    divFirst.style.alignItems = 'center';    

    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#information__2")
    description__item.append(div)

}