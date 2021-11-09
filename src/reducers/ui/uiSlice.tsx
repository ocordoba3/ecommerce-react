import { createSlice } from '@reduxjs/toolkit';

export type sortOrder = 'asc' | 'desc';
export type sortType = 'name' | 'price';
export type priceRange = 'low20' | '20-100' | '100-200' | 'more200';
export type themeType = 'light' | 'dark';

const themeStoraged = localStorage.getItem('isLightMode');
const initialTheme = themeStoraged !== null ? JSON.parse(themeStoraged) : true;
export interface Ui {
    isModalOpen: boolean,
    isCartOpen: boolean,
    sortBy:[sortOrder, sortType],
    categoryFilter: string[],
    priceRange: Array<priceRange>,
    theme: themeType,
    isLightMode: boolean
}

const initialState: Ui = {
    isModalOpen: false,
    isCartOpen: false,
    sortBy: ['asc', 'price'],
    categoryFilter: [],
    priceRange: [],
    theme: 'light',
    isLightMode: initialTheme
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
        },
        setTheme: (state, data: any) => {
            if(state.theme === data.payload) {
                return;
            }
            state.theme = data.payload;
        },
        setIsLightMode: (state, data: any) => {
            state.isLightMode = data.payload;
        },
    },
})

export const { setIsModalOpen, setIsCartOpen, setSortyByFilters, setCategoryFilters, setPriceRange, setTheme, setIsLightMode } = uiSlice.actions

export default uiSlice.reducer