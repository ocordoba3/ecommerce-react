import { createSlice } from '@reduxjs/toolkit';

export type sortOrder = 'asc' | 'desc';
export type sortType = 'name' | 'price';
export type priceRange = 'low20' | '20-100' | '100-200' | 'more200';

export interface Ui {
    isModalOpen: boolean,
    isCartOpen: boolean,
    sortBy:[sortOrder, sortType],
    categoryFilter: string[],
    priceRange: Array<priceRange>
}

const initialState: Ui = {
    isModalOpen: false,
    isCartOpen: false,
    sortBy: ['asc', 'price'],
    categoryFilter: [],
    priceRange: [],
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setIsModalOpen: (state, data: any) => {
            state.isModalOpen = data.payload;
        },
        setIsCartOpen: (state, data: any) => {
            state.isCartOpen = data.payload;
        },
        setSortyByFilters: (state, data: any) => {
            state.sortBy = data.payload;
        },
        setCategoryFilters: (state, data: any) => {
            state.categoryFilter = data.payload;
        },
        setPriceRange: (state, data: any) => {
            state.priceRange = data.payload;
        }
    },
})

export const { setIsModalOpen, setIsCartOpen, setSortyByFilters, setCategoryFilters, setPriceRange } = uiSlice.actions

export default uiSlice.reducer