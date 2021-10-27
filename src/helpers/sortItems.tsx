import { Product } from "../reducers/products/productsSlice";
import { sortOrder, sortType } from "../reducers/ui/uiSlice";

export const sortItems = (array: Array<Product>, sortBy: [sortOrder, sortType]) => {
    return array.sort((a, b) => {
        const orderBy = sortBy[0];
        const sortType = sortBy[1];
        let order = (orderBy === 'asc') ? 1 : -1;
        if (sortType === 'name') {
            return (
                a[sortType].toLowerCase() < b[sortType].toLowerCase()
                    ? -1 * order : 1 * order
            )
        } else {
            return (
                a[sortType] < b[sortType]
                    ? -1 * order : 1 * order
            )
        }
    });
}