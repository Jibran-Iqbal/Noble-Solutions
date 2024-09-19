import { combineReducers } from "redux";
import products from './products.js'
import category from "./category.js";


export default combineReducers({
    products:products,
    category:category,
})