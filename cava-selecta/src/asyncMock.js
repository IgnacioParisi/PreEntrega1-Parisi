import jsonProducts from "./productsList.json" assert {type: 'json'}

const productList = jsonProducts;
console.log(productList)

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productList);
        }, 1000)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productList.find((product) => product.id === productId))
        }, 1000)
    })
}