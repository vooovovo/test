import { ADD_PRODUCT,DELETE_PRODUCT } from "../actions/types";

const initialState = {
    productsList:[],
};

const productReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_PRODUCT : 
            return{
                ...state,
                productsList:state.productsList.concat(action.product)
            }
        case DELETE_PRODUCT :
            return{
                ...state,
                productsList:state.productsList.filter((item)=>item.id != action.id)
            }
        default :
            return state
    }
}
export default productReducer;