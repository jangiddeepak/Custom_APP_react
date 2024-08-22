export const Menapicaller=async ()=>{
    let data=fetch ("https://fakestoreapi.com/products/category/men's%20clothing")
    return await (await data).json()
} 