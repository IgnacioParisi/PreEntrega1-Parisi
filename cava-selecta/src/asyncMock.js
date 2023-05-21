import jsonProducts from "./productsList.json"

const productList = jsonProducts;

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productList);
        }, 1000)
    })
}

export const getProductsById = (productId) => {
    console.log(productId)
    console.log(productList)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productList.filter((product) => product.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productList.filter((product) => product.category === categoryId))
        }, 1000)
    })
}