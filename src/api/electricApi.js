export const Electapicaller=async ()=>{
    let data=fetch ('https://api.escuelajs.co/api/v1/products/?categoryId=2')
    return await (await data).json()
} 