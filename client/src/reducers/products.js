import {products} from "./allProducts";
// Define the path to the allProducts.json file

// Initialize the products array

// Check if the allProducts.json file exists and read it


// Initialize the state
const initialState = {
    products: products, // Initialize with the products array from allProducts.json
    count: products.length, // Set the count to the number of products
    isLoading: false, // Set to false since products are loaded initially
    names: "", // Adjust as needed based on further logic
    product: {}, // Adjust as needed based on further logic
}

// Define the product reducer
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_PRODUCTS:
        //     return {...state, products: action.payload.data, count:action.payload.count};
        // case GET_PRODUCT:
        //     return {...state, product: action.payload.data};
        // case GET_MOSTLY_RENTED_PRODUCTS:
        //     return {...state, products: action.payload.data};
        // case GET_PRODUCT_NAMES:
        //     return {...state, names: action.payload.data};
        // case GET_BY_SEARCH:
        //     return {...state, products: action.payload.data};
        // case START_LOADING:
        //     return {...state, isLoading : true}
        // case END_LOADING:
        //     return {...state, isLoading : false}
        default:
            return state;
    }
}

export default productReducer;
