import { obtenerProducto, obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto } from "../models/products.models.js";

export const addProductService = async (product) => {
    return (
        new Promise(async (res, rej) => {
            try {
                const newProduct = await agregarProducto(product)
                res(newProduct)
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )       
};

export const editProductService = async (id, product) => {
    return (
        new Promise(async (res, rej) => {    
            try {
                const newProduct = await actualizarProducto(id, product)
                res(newProduct)
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
};

export const deleteProductService = async (id) => {
    return (
        new Promise(async (res, rej) => {
            try {
                await eliminarProducto(id)
                res()
            } catch (error) {
                console.log(error)
                rej(error)  
            }
        }
    ))
};

export const getAllProductsService = async () => {
    return (
        new Promise(async (res, rej) => {
            try {
                const products = await obtenerProductos()
                res(products)
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
};

export const getProductByIdService = async (id) => {
    return (
        new Promise(async (res, rej) => {
            try {
                const product = await obtenerProducto(id)
                res(product)
            } catch (error) {
                console.log(error)
                rej(error)
            }
    }));
};