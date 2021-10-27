import { createSlice } from '@reduxjs/toolkit';

export interface Product {
    name: string,
    category: string,
    price: number,
    currency: string,
    image: {
        src: string,
        alt: string
    },
    bestseller: boolean,
    featured: boolean,
    details: any
    id?: string,
    dimmentions?: any
}

export interface ProductsState {
    products: Array<Product>,
    featuredProduct: Product | null,
    totalProducts: number,
    paginatedItems: Array<Product>
}

const initialState: ProductsState = {
    products: [],
    featuredProduct: null,
    totalProducts: 0,
    paginatedItems: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsList: (state, data: any) => {
            state.products = [...data.payload]
        },
        setTotalProducts: (state, data: any) => {
            state.totalProducts = data.payload
        },
        setFeaturedProduct: (state, data: any) => {
            state.featuredProduct = data.payload
        },
        addPaginatedItems: (state, data: any) => {
            state.paginatedItems = [...data.payload]
        }
    },
})

export const { setProductsList, addPaginatedItems, setTotalProducts, setFeaturedProduct } = productsSlice.actions

export default productsSlice.reducer;