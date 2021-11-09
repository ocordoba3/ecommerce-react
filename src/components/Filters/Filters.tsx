import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtersByCategory, filtersByPrice } from '../../consts';
import { priceRange, setCategoryFilters, setPriceRange } from '../../reducers/ui/uiSlice';
import { RootState } from '../../store/store';
import { FiltersContainer } from './styles';

export const Filters = () => {

    const { categoryFilter, priceRange, isLightMode } = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();

    const handleAddFilter = (arrayName: any, value: string, reducerName: any) => {
        if (arrayName.find((x: string) => x === value)) {
            const newArray = arrayName.filter((el: string) => el !== value);
            dispatch(reducerName(newArray));
        } else {
            dispatch(reducerName([...arrayName, value]));
        }
    }

    return (
        <FiltersContainer isLightMode={isLightMode} className="animate__animated animate__fadeIn">
            <h2>Category</h2>
            {
                filtersByCategory.map(filter => (
                    <label key={filter.id} className="container">{filter.name}
                        <input aria-labelledby={filter.id} checked={categoryFilter.includes(filter.value)} type="checkbox" value={filter.value}
                            onChange={({ target }) => handleAddFilter(categoryFilter, target.value, setCategoryFilters)}
                        />
                        <span className="checkmark"></span>
                    </label>
                ))
            }
            <hr />
            <h2>Price range</h2>
            {
                filtersByPrice.map(filter => (
                    <label key={filter.id} className="container">{filter.name}
                        <input aria-labelledby={filter.id} checked={priceRange.includes(filter.value as priceRange)} type="checkbox" value={filter.value}
                            onChange={({ target }) => handleAddFilter(priceRange, target.value, setPriceRange)}
                        />
                        <span className="checkmark"></span>
                    </label>
                ))
            }
        </FiltersContainer>
    )
}
