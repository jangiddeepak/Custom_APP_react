export const apicaller=async ()=>{
    let data=fetch ('https://api.escuelajs.co/api/v1/products')
    return await (await data).json()
} 