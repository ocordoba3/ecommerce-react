// Required imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Hooks
import { useWindowSize } from '../../hooks/useWindowSize';
// Store and reducers
import { RootState } from '../../store/store';
import { setIsModalOpen, setSortyByFilters, sortOrder, sortType } from '../../reducers/ui/uiSlice';
// Components
import { Filters } from '../Filters/Filters';
import { Popup } from '../Popup/Popup';
import ProductsList from '../ProductsList/ProductsList';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BiFilter } from 'react-icons/bi';
import { ProductsContainer, ProductsContent, ProductsHeader, SortContainer } from './styles';

const Products = () => {

    const { sortBy, isLightMode } = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();
    const windowSize = useWindowSize();

    const openForm = () => {
        dispatch(setIsModalOpen(true));
        (document.getElementById('filterPopup') as any).style.display = 'block';
    }

    const handleSort = (sortOrder: sortOrder, sortType: sortType) => {
        dispatch(setSortyByFilters([sortOrder, sortType]));
    }

    return (
        <ProductsContainer>
            <ProductsHeader isLightMode={isLightMode}>
                <h1> Products </h1>
                <BiFilter className="filterMobile" size="2.9rem" onClick={() => openForm()}></BiFilter>
                <SortContainer isLightMode={isLightMode}>
                    Sort by
                    <select title="select" defaultValue={sortBy[1]} onChange={({ target }: any) => handleSort(sortBy[0], target.value)}>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                    <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
                    {
                        sortBy[0] === 'asc' ? <FaSortAlphaDown onClick={() => handleSort('desc', sortBy[1])} /> : <FaSortAlphaDownAlt onClick={() => handleSort('asc', sortBy[1])} />
                    }
                </SortContainer>
            </ProductsHeader>
            <ProductsContent>
                {windowSize.width > 767 && <Filters />}
                <ProductsList />
            </ProductsContent>
            <Popup></Popup>
        </ProductsContainer>
    )
}

export default Products;