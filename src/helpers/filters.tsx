import { Product } from "../reducers/products/productsSlice"
import { priceRange } from "../reducers/ui/uiSlice"

export const filterByCategory = (array: Array<Product>, categoryFilter: Array<string>) => {
    return array.filter((item: Product) => categoryFilter.includes(item.category) ? item : null)
}

export const filterByPriceRange = (array: Array<Product>, priceRange: Array<priceRange>) => {
    let newArray: Array<Product> = [];
    for (const range of priceRange) {
        switch (range) {
            case 'low20':
                newArray.push(...array.filter((item: Product) => item.price <= 20));
                break;
            case '20-100':
                newArray.push(...array.filter((item: Product) => item.price > 20 && item.price <= 100));
                break;
            case '100-200':
                newArray.push(...array.filter((item: Product) => item.price > 100 && item.price <= 200));
                break;
            case 'more200':
                newArray.push(...array.filter((item: Product) => item.price > 200));
                break;
        }
    }
    return newArray;
}