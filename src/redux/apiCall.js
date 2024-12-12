import axios from "axios"
import { updateStart, updateProduct, updateErr, updateDetail } from './productSlice';
// fetching api for home and search page 
export const productList = async ({ api }, dispatch) => {
    dispatch(updateStart())
    try {
        await axios.get(`${api}`).then(res => {
            dispatch(updateProduct(res.data))
        })
    } catch (error) {
        dispatch(updateErr())
    }
}


//fetching single product api using id  
export const productDetail = async ({ api }, dispatch) => {
    dispatch(updateStart())
    try {
        await axios.get(`${api}`).then(res => {
            dispatch(updateDetail(res.data))
        })
    } catch (error) {
        dispatch(updateErr())
        console.log(error);
    }
}
