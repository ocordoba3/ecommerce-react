import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtersByCategory, filtersByPrice } from '../../consts';
import { priceRange, setCategoryFilters, setPriceRange } from '../../reducers/ui/uiSlice';
import { RootState } from '../../store/store';
import './styles.css';

export const Filters = () => {

    const {categoryFilter, priceRange} = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();

    const handleAddFilter = (arrayName: any, value: string, reducerName: any) => {
        if(arrayName.find((x: string) => x === value)){
            const newArray = arrayName.filter( (el: string) => el !== value);
            dispatch(reducerName(newArray));
        } else {
            dispatch(reducerName([...arrayName, value]));
        }
    }

    return (
        <aside className="filters animate__animated animate__fadeIn">
            <h4>Category</h4>
            <ul>
                {
                    filtersByCategory.map(filter => (
                        <li className="round" key={filter.name}>
                            <input checked={categoryFilter.includes(filter.value)} className="inputCheck" type="checkbox" value={filter.value} id={filter.value} 
                                onChange={({target}) => handleAddFilter(categoryFilter, target.value, setCategoryFilters)} 
                            />
                            <label htmlFor={filter.value}>{filter.name}</label>
                        </li>
                    ))
                }
            </ul>
            <hr />
            <h4>Price range</h4>
            <ul>
                {
                    filtersByPrice.map(filter => (
                        <li className="round" key={filter.name}>
                            <input checked={priceRange.includes(filter.value as priceRange)} className="inputCheck" type="checkbox" value={filter.value} id={filter.value}
                                onChange={({target}) => handleAddFilter(priceRange, target.value, setPriceRange)}
                            />
                            <label htmlFor={filter.value}>{filter.name}</label>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}
