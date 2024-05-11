export const getAllInfoCompany = async() =>{
    let res = await fetch("https://api.spacexdata.com/v4/company")
    let data = await res.json()
    console.log(data)
    return data;
}