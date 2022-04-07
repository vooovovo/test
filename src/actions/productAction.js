import { DELETE_PRODUCT,ADD_PRODUCT} from "./types";

export const addProduct = (product) =>({
    type : ADD_PRODUCT,
    product:product
})

export const deleteProduct = (id) =>({
    type :DELETE_PRODUCT,
    id:id
})

