export const getAllInfoCrew = async() =>{
    let res = await fetch("https://api.spacexdata.com/v4/crew")
    let data = await res.json()
    console.log(data)
    return data;
}