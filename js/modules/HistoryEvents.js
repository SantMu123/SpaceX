export const getAllInfoEvents = async() =>{
    let res = await fetch("https://api.spacexdata.com/v4/history")
    let data = await res.json()
    console.log(data)
    return data;
}